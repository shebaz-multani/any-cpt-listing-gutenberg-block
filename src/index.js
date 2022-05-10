import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { 
		PanelBody, 
		PanelRow, 
		SelectControl,
		RadioControl,
		__experimentalNumberControl as NumberControl
	} from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

import './scss/index.scss';
import placeholder from './images/placeholder.png'; 


registerBlockType('acptlgb/any-cpt-listing', {
	title: __('Any Post/CPT Listing','acptlgb'),
	description: __( 'Show list or grid view of any kind of wp post type including default posts as well as custom post types in front end also with verity of settings.' ),
	category: 'widgets',
	icon: 'list-view',
	keywords: [ __( 'post' ), __( 'custom' ), __( 'cpt' ), __( 'list' ), __( 'grid' ) ],
	attributes:{
		selected_post_type: {type: "string", default:"post"},
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
        const [ selectedPostTypeRestBase, setSelectedPostTypeRestBase ] = useState('posts');

		if (registeredPostsTypes.length === 0) {
			apiFetch({
				path:'/wp/v2/available_types',
			}).then( ( post_types ) => {
				console.log('post_types');
				console.log(post_types);
				setRegisteredPostsTypes( post_types );
			}).catch( (error) => console.error('Error:', error) );
			
			return __('Loading..','acptlgb');
		}
		
		let per_page = view_type === 'grid' ? posts_per_row_no * rows_per_page : posts_per_page;
		per_page = per_page > 0 ? per_page : 3;
		let filteredPost = {}, filteredPostsData = [];
		if (newCPTData.length === 0) {
			console.log('/wp/v2/' + selectedPostTypeRestBase + '/?_embed=true&per_page=' + per_page);
			apiFetch({
				path:'/wp/v2/' + selectedPostTypeRestBase + '/?_embed=true&per_page=' + per_page,
			}).then( ( posts ) => {
				if (posts.length > 0) {
					posts.map(function( post ) {
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
				} else { filteredPostsData = {no_data: __(`No data found in ${selected_post_type}`,'acptlgb')}; }
				setNewCPTData(filteredPostsData);
			}).catch( (error) => { filteredPostsData = {no_data: __(`<b>${selected_post_type}</b> CPT rest route is not enable, please enable to show here. However, CPT will be still displayed on frontend.`,'acptlgb')}; setNewCPTData(filteredPostsData); } );
			// return __(`Loading ${selected_post_type} data..`,'acptlgb');
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

		<InspectorControls key="acpt-display-setting">
			<PanelBody title={'Display Settings'}>
				<PanelRow>
					<SelectControl 
						label={ __('Select Post Type','acptlgb') }
						value={selected_post_type} 
						onChange={ (new_selected_post_type) => { setAttributes({selected_post_type: new_selected_post_type}); setSelectedPostTypeRestBase(registeredPostsTypes[new_selected_post_type].rest_base ? registeredPostsTypes[new_selected_post_type].rest_base : new_selected_post_type); setNewCPTData([]); } } >
							{ Object.keys(registeredPostsTypes).map(function(key) {
								return( <option data-rest={registeredPostsTypes[key].rest_base} value={ key } > { registeredPostsTypes[key].label } </option> )
							}) }
					</SelectControl>
				</PanelRow>
				<PanelRow>
					<RadioControl
			            label={ __('View Type','acptlgb') }
			            selected={view_type}
			            options={ [
			                { label: __('Grid View', 'acptlgb'), value: 'grid' },
			                { label: __('List List', 'acptlgb'), value: 'list' },
			            ] }
			            onChange={ ( new_view_type ) => { setAttributes({view_type: new_view_type, posts_per_row: new_view_type == 'grid' ? 'acpt-three-col' : '' }); setNewCPTData([]); } }
			        />
				</PanelRow>
				{ view_type == 'grid' ?
					<>
						<PanelRow>
							<SelectControl
								label={ __('Posts Per Row','acptlgb') }
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
								label={ __('Rows Per Page','acptlgb') }
								value={rows_per_page}
								min="1"
								onChange={ (new_rows_per_page) => {setAttributes({rows_per_page: new_rows_per_page}); new_rows_per_page > 0 && setNewCPTData([]);} }
							/>
						</PanelRow>
					</>
				 : 
					<PanelRow>
						<NumberControl 
							label={ __('Posts Per Page','acptlgb') }
							value={posts_per_page}
							min="1"
							onChange={ (new_posts_per_page) => {setAttributes({posts_per_page: new_posts_per_page}); new_posts_per_page > 0 && setNewCPTData([]);} }
						/>
					</PanelRow>
				}
			</PanelBody>
		</InspectorControls>

		{ newCPTData.length === 0 ? __(`Loading ${selected_post_type} data..`,'acptlgb') : 
			<div className={className + ' acpt-main acpt-editor-screen'} >
				<div className="acpt-row">
					{ newCPTData.no_data ?  newCPTData.no_data :
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
		}

		</>);
	},

	save: function() {
		return null;
	},
});