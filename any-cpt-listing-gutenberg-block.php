<?php

/**
 * Plugin Name: Any Post/CPT Listing - Gutenberg Block
 * Description: Show list or grid view of any kind of wp post type including default posts as well as custom post types in front end also with verity of settings.
 * Version:     1.0.0
 * Author:      Shebaz Multani
 * Text Domain: acptlgb
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
	   add_action('init', [$this, 'init']);
       add_action( 'rest_api_init', [ $this, 'actpl_register_rest_routes']);
	}

    function init() 
    {   
        $block_style = ACPTL_prefix . '-block-style';
        $edit_block_script = ACPTL_prefix . '-edit-block-script';
        
        wp_register_style( $block_style , plugin_dir_url(__FILE__) . 'build/index.css'  );
        wp_register_script( $edit_block_script, plugin_dir_url(__FILE__) . 'build/index.js', [], false, false );


        register_block_type('acptlgb/any-cpt-listing', [
            'attributes' => [
                'selected_post_type' => ['type' => 'string', 'default' => 'post'],
                'view_type' => ['type' => 'string', 'default' => 'grid'],
                'posts_per_page' => ['type' => 'string', 'default' => '6'],
                'posts_per_row' => ['type' => 'string', 'default' => 'acpt-three-col'],
                'posts_per_row_no' => ['type' => 'string', 'default' => '3'],
                'rows_per_page' => ['type' => 'string', 'default' => '1'],
            ],
            'render_callback' => [$this, 'acptl_block_callback'],
            'editor_script'   => $edit_block_script,
            'style'   => $block_style,
        ]);
    }

    /**
     * The code that runs during plugin activation.
     */
    function activate()
    {

    }

    /**
     * The code that runs during plugin deactivation.
     */
    function deactivate()
    {
        
    }

    function acptl_block_callback( $attributes )
    {   
        extract($attributes);
        $per_page = $view_type === 'grid' ? $posts_per_row_no * $rows_per_page : $posts_per_page;
        $per_page = $per_page > 0 ? $per_page : 3;
        $posts = get_posts(['post_type' => $selected_post_type, 'posts_per_page' => $per_page]);
        $placeholder_image = plugin_dir_url(__FILE__) . 'build/images/placeholder.5b4e5f67.png';

        
        ob_start(); echo $selected_post_type ?>

        <div class="<?php echo $className; ?> acpt-main acpt-front-screen" >
            <div class="acpt-row">
                <?php if(!empty($posts)) {
                    foreach ($posts as $post) {
                        $post_id = $post->ID;
                        $post_thumbnail_id = get_post_thumbnail_id( $post_id );
                        $featured_image = $post_thumbnail_id > 0 ? wp_get_attachment_url($post_thumbnail_id) : $placeholder_image;
                        $post_title = $post->post_title;
                        $post_excerpt = get_the_excerpt($post_id);
                        $post_link = get_permalink($post_id);
                        ?>
                        <div class='acpt-block-item <?php echo "acpt-$view_type $posts_per_row"; ?>' id='<?php echo "post-". $post_id; ?>' >
                            <figure>
                                <img src= <?php echo $featured_image; ?> />
                            </figure>
                            <div class="acpt-item-content">
                                <h3><?php echo $post_title; ?></h3>
                                <p><?php echo $post_excerpt; ?></p>
                                <a href="<?php echo $post_link; ?>">Read More</a>
                            </div>
                        </div>
                    <?php }
                } else {
                    echo __("<p>No data found in <b>$selected_post_type</b></p>", 'acptlgb');
                } ?>
            </div>
        </div>

        <?php return ob_get_clean(); 
    }

    function actpl_register_rest_routes()
    {
        register_rest_route( 'wp/v2/', '/available_types', [
            'methods' => 'GET',
            'callback' => [$this, 'actpl_available_types_callback'],
        ]); 
    }

    function actpl_available_types_callback()
    {   
        $avilableBuiltinPostTypes = ['post' => 'post', 'page' => 'page','attachment' => 'attachment' ];
        $allPostTypes = get_post_types(['_builtin' => false]);
        
        $availablePostTypes = [];
        
        foreach (array_merge($avilableBuiltinPostTypes, $allPostTypes) as $type) {
            $availablePostTypes[$type] = get_post_type_object($type);
        }

        return $availablePostTypes;

    }

}

function activate_any_cpt_listing() {
    AnyCPTListingGutenbergBlock::activate();
}

function deactivate_any_cpt_listing() {
    AnyCPTListingGutenbergBlock::deactivate();
}

register_activation_hook( __FILE__, 'activate_any_cpt_listing' );
register_deactivation_hook( __FILE__, 'deactivate_any_cpt_listing' );


//Init
new AnyCPTListingGutenbergBlock();

