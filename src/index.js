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
		selected_post_type: {type: "string"},
		view_type: {type: "string", default: "grid"},
		posts_per_page: {type: "string", default: "6"},
		posts_per_row: {type: "string", default: "3"},
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
			rows_per_page,
		} = attributes;

		
		if (!post_types) {
			wp.apiFetch({ 
				path:'/wp/v2/types',
			}).then( ( post_types ) => {
				setAttributes({ post_types });
			});
			return 'Loading..';
		}
		
		if (post_types && post_types.lenght === 0) {
			return 'No post_types regsited!';
		}
		
		if (!cpt_data) {
			wp.apiFetch({ 
				path:'/wp/v2/' + selected_post_type,
			}).then( ( posts ) => {
				console.log(posts);
				if (posts.length > 0){
					setAttributes({ cpt_data: posts});
				} else { 
					setAttributes({ cpt_data: {'no_data': `No data found in ${selected_post_type}` }});
				}

			});
			return `Loading ${selected_post_type} data..`;
		}
		

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
					<PanelRow>
						<NumberControl 
							label="Posts Per Page" 
							value={posts_per_page} 
							onChange={ (new_posts_per_page) => setAttributes({posts_per_page: new_posts_per_page}) }
						/>
					</PanelRow>
				 : 
					<>
						<PanelRow>
							<NumberControl 
								label="Posts Per Row" 
								value={posts_per_row} 
								onChange={ (new_posts_per_row) => setAttributes({posts_per_row: new_posts_per_row}) }
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
				}
			</PanelBody>
		</InspectorControls>

		<div className={className + ' acptgb-main'} >
			<div className="container" >			
				<div className="row" >			
					<div className="acpt-data">
						{ 	
							cpt_data.no_data ?
							<p>{ cpt_data.no_data }</p>
							:
							cpt_data.map(function(post) {
								return( <p> { post.title.rendered } </p> )
							})
						}
					</div>
				</div>
			</div>
		</div>



		</>);
	},

	save: function() {
		return null;
	},
});