const { registerBlockType } = wp.blocks;
import { decodeEntities } from '@wordpress/html-entities';
const { InspectorControls } = wp.blockEditor;
const { useState } = wp.element;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
const { 
		PanelBody, 
		PanelRow, 
		SelectControl,
		RadioControl
	} = wp.components;

import './scss/editor.scss';
import placeholder from './images/placeholder.png'; 

registerBlockType('acptlgb/any-cpt-listing', {
	title: 'Any CPT Listing',
	icon: 'smiley',
	category: 'common',
	attributes:{
		selected_post_type: {type: "string", default:"posts"},
		view_type: {type: "string", default: "grid"},
		posts_per_page: {type: "string", default: "6"},
		posts_per_row: {type: "string", default: "acpt-three-col"},
		posts_per_row_no: {type: "string", default: "3"},
		rows_per_page: {type: "string", default: "1"},
	},
	
	edit: function({ attributes, setAttributes }) {

		const {
			className,
			selected_post_type,
			view_type,
			posts_per_page,
			posts_per_row,
			posts_per_row_no,
			rows_per_page,
		} = attributes;
        
        const [ newCPTData, setNewCPTData ] = useState([]);
        const [ registeredPostsTypes, setRegisteredPostsTypes ] = useState([]);

		
		if (registeredPostsTypes.length === 0) {
			wp.apiFetch({
				path:'/wp/v2/types',
			}).then( ( post_types ) => {
				setRegisteredPostsTypes( post_types );
			}).catch((error) => {
			  console.error('Error:', error);
			});
			return 'Loading..';
		}
		
		let per_page = view_type === 'grid' ? posts_per_row_no * rows_per_page : posts_per_page;
		per_page = per_page > 0 ? per_page : 3;
		let filteredPost = {}, filteredPostsData = [];
		if (newCPTData.length === 0) {
			wp.apiFetch({
				path:'/wp/v2/types',
			}).then( ( post_type ) => {
				let post_type_rest_base = post_type[selected_post_type].rest_base;
				wp.apiFetch({
					path:'/wp/v2/' + post_type_rest_base + '/?_embed=true&per_page=' + per_page,
				}).then( ( posts ) => {
					if (posts.length > 0) {
							console.log('posts', posts)
						posts.map(function(post) {
							let featured_media_url = '';
							if (post.featured_media > 0) {
								featured_media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
							}
							filteredPost = {
								id: post.id,
								title: post.title && post.title.rendered,
								excerpt: post.excerpt && decodeEntities(post.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')),
								link: post.link,
								featured_media: featured_media_url,
							};
							filteredPostsData.push(filteredPost);
						});
					} else { 
						filteredPostsData = {no_data: `No data found in ${selected_post_type}`};
					}
					setNewCPTData(filteredPostsData);
				}).catch((error) => {
				  console.error('Error:', error);
				});
			}).catch((error) => {
			  console.error('Error:', error);
			});

			return `Loading ${selected_post_type} data..`;
		}

		const col_options = [
            { label: '1', value: 'acpt-one-col' },
            { label: '2', value: 'acpt-two-col' },
            { label: '3', value: 'acpt-three-col' },
            { label: '4', value: 'acpt-four-col' },
            { label: '5', value: 'acpt-five-col' },
            { label: '6', value: 'acpt-six-col' },
        ];

		return(<>

		<InspectorControls key="setting">
			<PanelBody title={'Display Settings'}>
				<PanelRow>
					<SelectControl 
						label="Select Post Type" 
						value={selected_post_type} 
						onChange={ (new_selected_post_type) => { setAttributes({selected_post_type: new_selected_post_type}); setNewCPTData([]); } } >
							{ Object.keys(registeredPostsTypes).map(function(key) {
								return( <option value={ registeredPostsTypes[key].slug } > { registeredPostsTypes[key].name } </option> )
							}) }
					</SelectControl>
				</PanelRow>
				<PanelRow>
					<RadioControl
			            label="View Type"
			            selected={view_type}
			            options={ [
			                { label: 'Grid View', value: 'grid' },
			                { label: 'List List', value: 'List' },
			            ] }
			            onChange={ ( new_view_type ) => { setAttributes({view_type: new_view_type, posts_per_row: new_view_type == 'grid' ? 'acpt-three-col' : '' }); setNewCPTData([]); } }
			        />
				</PanelRow>
				{ view_type == 'grid' ?
					<>
						<PanelRow>
							<SelectControl
								label="Posts Per Row" 
			            		value={posts_per_row}
			            		options={ col_options }
			            		onChange={ ( new_posts_per_row ) => {
			            			let col_label = col_options.filter(obj => { return obj.value === new_posts_per_row });
			            			setAttributes({posts_per_row: new_posts_per_row, posts_per_row_no: col_label[0].label}); 
			            			setNewCPTData([]);
			            		} }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl 
								label="Rows Per Page"
								value={rows_per_page}
								min="1"
								onChange={ (new_rows_per_page) => {setAttributes({rows_per_page: new_rows_per_page}); new_rows_per_page > 0 && setNewCPTData([]);} }
							/>
						</PanelRow>
					</>
				 : 
					<PanelRow>
						<NumberControl 
							label="Posts Per Page"
							value={posts_per_page}
							min="1"
							onChange={ (new_posts_per_page) => {setAttributes({posts_per_page: new_posts_per_page}); new_posts_per_page > 0 && setNewCPTData([]);} }
						/>
					</PanelRow>
				}
			</PanelBody>
		</InspectorControls>

		<div className={className + ' acpt-main acpt-editor-screen'} >
			<div className="acpt-row">
				{
				newCPTData.no_data ?
				<p>{ newCPTData.no_data }</p>
				:
				newCPTData.map(function(post) {
					return(<>
						<div className={ "acpt-block-item " + posts_per_row + " acpt-"+view_type } id={"post-"+post.id} >
							<figure>
								<img src={ post.featured_media ? post.featured_media : placeholder } />
							</figure>
							<div className="acpt-item-content">
								<h3>{ post.title }</h3>
								<p>{ post.excerpt }</p>
								<a href={ post.link } > Read More </a>  
							</div>
						</div>
					</>)
				})
				}
			</div>
		</div>

		</>);
	},

	save: function() {
		return null;
	},
});