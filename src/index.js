const { registerBlockType } = wp.blocks;
const { InspectorControls  } = wp.editor;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
const { 
		PanelBody, 
		PanelRow, 
		SelectControl,  
	} = wp.components;


registerBlockType('acptlgb/any-cpt-listing', {
	title: 'Any CPT Listing',
	icon: 'smiley',
	category: 'common',
	attributes:{
		post_types: { type: 'object' },
		selected_post_type: {type: "string"},
		posts_per_page: {type: "string", default: 6},
	},
	
	edit: function({ attributes, setAttributes }) {

		
		if(!attributes.post_types){
			wp.apiFetch({ 
				path:'/wp/v2/all_post_types',
			}).then( ( post_types ) => {
				setAttributes({ post_types });
			});
		}
		if(!attributes.post_types){
			return 'Loading..';
		}
		if(attributes.post_types && attributes.post_types.lenght === 0){
			return 'No post_types regsited!';
		}

		return(<>
			<InspectorControls key="setting">
				<PanelBody title={'Display Settings'}>
					<PanelRow>
						<SelectControl 
							label="Select Post Type" 
							value={attributes.selected_post_type} 
							onChange={ (new_selected_post_type) => setAttributes({selected_post_type: new_selected_post_type}) } >
								{attributes.post_types.map(  post => { return( <option> {post.title} </option> ) })}
						</SelectControl>
					</PanelRow>
					<PanelRow>
						<NumberControl 
							label="Number of posts" 
							value={attributes.posts_per_page} 
							onChange={ (new_posts_per_page) => setAttributes({posts_per_page: new_posts_per_page}) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>			
			<h1>Hello Editor</h1>
		</>);
	},

	save: function() {
		return null;
	},
});