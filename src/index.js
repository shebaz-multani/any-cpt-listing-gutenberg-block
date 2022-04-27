const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
const { 
		PanelBody, 
		PanelRow, 
		SelectControl,
		RadioControl
	} = wp.components;

import './scss/editor.scss';

registerBlockType('acptlgb/any-cpt-listing', {
	title: 'Any CPT Listing',
	icon: 'smiley',
	category: 'common',
	attributes:{
		post_types: { type: 'object' },
		cpt_data: { type: 'object' },
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
			post_types,
			cpt_data,
			selected_post_type,
			view_type,
			posts_per_page,
			posts_per_row,
			posts_per_row_no,
			rows_per_page,
		} = attributes;

		
		if (!post_types) {
			wp.apiFetch({ 
				path:'/wp/v2/types',
			}).then( ( post_types ) => {
				setAttributes({ post_types });
			}).catch((error) => {
			  console.error('Error:', error);
			});
			return 'Loading..';
		}
		
		if (post_types && post_types.lenght === 0) {
			return 'No post_types regsited!';
		}
		
		let per_page = view_type === 'grid' ? posts_per_row_no * rows_per_page : posts_per_page;
		
		const getPostImage = async (media_id) => {
			/*wp.apiFetch({ 
				path:'/wp/v2/media' + media_id,
			}).then( ( media ) => {
				featured_media = media.description.rendered;
			});
			*/
			let media = await wp.apiFetch({ path:'/wp/v2/media/' + media_id });
			console.log('media');
			console.log(media)

			return media.description.rendered;
		}


		if (!cpt_data) {
			let p = {},new_posts = [];
			wp.apiFetch({
				path:'/wp/v2/' + selected_post_type + '/?per_page=' + per_page ,
			}).then( ( posts ) => {
				console.log(posts);
				if (posts.length > 0) {
					posts.map(function(post) {
						let featured_media = '';
						if (post.featured_media > 0) {
							featured_media =  getPostImage(post.featured_media);
							console.log('featured_media');
							console.log(featured_media);
						}
						p = {
							id: post.id,
							title: post.title.rendered,
							excerpt: post.excerpt.rendered,
							link: post.link,
							featured_media,
						};
						new_posts.push(p);
					});
					console.log(new_posts);
					setAttributes({ cpt_data: new_posts});
				} else { 
					setAttributes({ cpt_data: {'no_data': `No data found in ${selected_post_type}` }});
				}
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
						onChange={ (new_selected_post_type) => setAttributes({selected_post_type: new_selected_post_type, cpt_data:'' }) } >
							{ Object.keys(post_types).map(function(key) {
								return( <option value={ post_types[key].rest_base } > { post_types[key].name } </option> )
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
			            onChange={ ( new_view_type ) => setAttributes({view_type: new_view_type}) }
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
			            			setAttributes({posts_per_row: new_posts_per_row, posts_per_row_no: col_label[0].label, cpt_data:'' })
			            		} }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl 
								label="Rows Per Page" 
								value={rows_per_page} 
								onChange={ (new_rows_per_page) => setAttributes({rows_per_page: new_rows_per_page}) }
							/>
						</PanelRow>
					</>
				 : 
					<PanelRow>
						<NumberControl 
							label="Posts Per Page" 
							value={posts_per_page} 
							onChange={ (new_posts_per_page) => setAttributes({posts_per_page: new_posts_per_page}) }
						/>
					</PanelRow>
				}
			</PanelBody>
		</InspectorControls>

		<div className={className + ' acpt-main'} >
			<div className="acpt-row">
				{ 	
					cpt_data.no_data ?
					<p>{ cpt_data.no_data }</p>
					:
					cpt_data.map(function(post) {
						return(<>
							<div className={ "acpt-post-block " + posts_per_row } id={post.id} >
								
								<h3> { post.title &&  post.title } </h3>
								<p>{ post.excerpt && post.excerpt.replace(/(<([^>]+)>)/ig, '') }</p>
								<a href={ post.link } > Read More </a>  
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