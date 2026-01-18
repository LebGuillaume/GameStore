<?php

/**
 * Plugin Name:       Blocks Gamestore
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gamestore
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
define('BLOCKS_GAMESTORE_PATH', plugin_dir_path(__FILE__));


require_once(BLOCKS_GAMESTORE_PATH . 'blocks.php');
add_filter('block_categories_all', function ($categories) {
	$gamestore_category = [
		'slug' => 'gamestore',
		'title' => __('GameStore Blocks', 'blocks-gamestore'),
		'icon'  => 'games',
	];

	$categories[] = $gamestore_category;

	return $categories;
}, 10, 2);

function create_block_blocks_gamestore_block_init()
{

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');

		// Ensure the dynamic block gets a render callback even if it's already registered.
		if (class_exists('WP_Block_Type_Registry')) {
			$registry = WP_Block_Type_Registry::get_instance();
			$block_type = $registry->get_registered('blocks-gamestore/block-games-line');
			if ($block_type) {
				$block_type->render_callback = 'view_block_games_line';
			}
		}
		return;
	}


	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		if ($block_type === 'block-games-line') {
			register_block_type(__DIR__ . "/build/{$block_type}", array('render_callback' => 'view_block_games_line'));
		} else {
			register_block_type(__DIR__ . "/build/{$block_type}");
		}
	}
}


add_action('init', 'create_block_blocks_gamestore_block_init');
