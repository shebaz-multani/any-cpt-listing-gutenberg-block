<?php

/**
 * Plugin Name: Any CPT Listing Gutenberg Block
 * Description: Show list of any kind of wp post type including default posts as well as custom post types in front end  also with verity of settings.
 * Version:     1.0.0
 * Author:      Shebaz Multani
 * Text Domain: any_cpt_listing_gutenberg_block
 * Domain Path: /languages
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

define('ACPTL_prefix', 'ACPTL');

/**
 * Main Class
 */
class AnyCPTListingGutenbergBlock
{

	function __construct()
	{
	   add_action('init', [$this, 'init_function']);
	}

    function init_function() 
    {   
        $edit_block_style = ACPTL_prefix . '-edit-block-style';
        $edit_block_script = ACPTL_prefix . '-edit-block-script';
        
        wp_register_style( $edit_block_style , plugin_dir_url(__FILE__) . 'build/index.css'  );
        wp_register_script( $edit_block_script, plugin_dir_url(__FILE__) . 'build/index.js' , ['wp-blocks','wp-editor', 'wp-components'] );


        register_block_type('acptlgb/any-cpt-listing', [
            'attributes' => [
                'post_types' => ['type' => 'object', ],
                'selected_post_type' => ['type' => 'string', 'default'=> 'posts' ],
                'view_type' => ['type' => 'string','default'=> 'grid' ],
                'posts_per_page' => ['type' => 'string','default'=> '6' ],
                'posts_per_row' => ['type' => 'string','default'=> '33.3333' ],
                'rows_per_page' => ['type' => 'string','default'=> '1' ],
            ],
            'render_callback' => [$this, 'acptlgb_callback'],
            'editor_script'   => $edit_block_script,
            'editor_style'   => $edit_block_style,
        ]);
    }

    function acptlgb_callback( $attributes )
    {
        ob_start(); ?>

            <h2>Hello from PHP !!!</h2>

        <?php return ob_get_clean();
    }

}

//Init
new AnyCPTListingGutenbergBlock();

