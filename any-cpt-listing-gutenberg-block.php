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

    function init_function(){
        wp_register_script( ACPTL_prefix . '-edit-block-script' , plugin_dir_url(__FILE__) . 'build/index.js' , ['wp-blocks','wp-editor', 'wp-components'] );

        register_block_type('acptlgb/any-cpt-listing', [
            'render_callback' => [$this, 'acptlgb_callback'],
            'editor_script' => ACPTL_prefix . '-edit-block-script',
        ]);
    }

    function acptlgb_callback() {
        ob_start(); ?>

            <h2>Hello from PHP !!!</h2>

        <?php return ob_get_clean();
    }

}

//Init
new AnyCPTListingGutenbergBlock();

