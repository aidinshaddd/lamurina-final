<?php
/**
 * Plugin Name: Lamurina Live Sync & Auto-Deploy
 * Description: GitHub Actions Auto-Deploy webhook receiver, WooCommerce Toman (IRT) currency fixer, duplicate content cleaner, and Sitemap V2 synchronizer for lamurinagallery.com.
 * Version: 2.0.0
 * Author: Lamurina Engineering (Aidin Shad)
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * 1. Fix WooCommerce Currency ($22,100,000.00 -> ۲۲,۱۰۰,۰۰۰ تومان)
 */
function lamurina_live_sync_fix_woocommerce_currency() {
    update_option('woocommerce_currency', 'IRT');
    update_option('woocommerce_currency_pos', 'right_space');
    update_option('woocommerce_price_num_decimals', 0);
    update_option('woocommerce_thousand_sep', ',');
    return [
        'currency' => get_option('woocommerce_currency'),
        'decimals' => get_option('woocommerce_price_num_decimals'),
        'position' => get_option('woocommerce_currency_pos'),
    ];
}

/**
 * 2. Clean duplicate filler blocks ("نکته تکمیلی 1..10") on /chandelier-installation/ and /service-area/
 */
function lamurina_live_sync_clean_duplicate_pages() {
    $slugs = ['chandelier-installation', 'service-area'];
    $cleaned = [];

    foreach ($slugs as $slug) {
        $page = get_page_by_path($slug, OBJECT, 'page');
        if ($page && !empty($page->post_content)) {
            $original = $page->post_content;
            // Remove repeated "نکته تکمیلی X:" paragraphs
            $updated = preg_replace('/<p[^>]*>\s*نکته تکمیلی\s*[0-9۰-۹]+:.*?<\/p>/su', '', $original);
            $updated = preg_replace('/نکته تکمیلی\s*[0-9۰-۹]+:[^\n]+/u', '', $updated);
            if ($updated !== $original) {
                wp_update_post([
                    'ID' => $page->ID,
                    'post_content' => trim($updated),
                ]);
                $cleaned[] = $slug;
            }
        }
    }

    return $cleaned;
}

/**
 * 3. Run full live sync (Currency + Page Clean + LiteSpeed Cache Purge)
 */
function lamurina_live_sync_run($payload = []) {
    $currency = lamurina_live_sync_fix_woocommerce_currency();
    $cleaned_pages = lamurina_live_sync_clean_duplicate_pages();

    if (function_exists('do_action')) {
        do_action('litespeed_purge_all');
    }
    if (function_exists('wp_cache_flush')) {
        wp_cache_flush();
    }

    $result = [
        'ok' => true,
        'timestamp' => current_time('mysql'),
        'branch' => sanitize_text_field($payload['branch'] ?? 'main'),
        'commit' => sanitize_text_field($payload['commit'] ?? ''),
        'currency_fix' => $currency,
        'cleaned_pages' => $cleaned_pages,
        'cache_purged' => true,
    ];

    update_option('lamurina_last_deploy_sync', $result, false);
    return $result;
}

/**
 * Run once automatically on plugin activation or first init
 */
add_action('init', function () {
    if (!get_option('lamurina_live_sync_v2_initialized')) {
        $res = lamurina_live_sync_run(['branch' => 'main', 'commit' => 'initial-v2']);
        update_option('lamurina_live_sync_v2_initialized', $res, false);
    }
});

/**
 * 4. Register REST API Endpoints for GitHub Actions Auto-Deploy
 *    - GET  /wp-json/lamurina/v1/status
 *    - POST /wp-json/lamurina/v1/deploy
 */
add_action('rest_api_init', function () {
    register_rest_route('lamurina/v1', '/status', [
        'methods' => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            return new WP_REST_Response([
                'ok' => true,
                'site' => get_site_url(),
                'repository' => 'aidinshaddd/lamurina-final',
                'branches' => ['developer', 'test', 'stage', 'main'],
                'last_sync' => get_option('lamurina_last_deploy_sync', null),
            ], 200);
        },
    ]);

    register_rest_route('lamurina/v1', '/deploy', [
        'methods' => 'POST',
        'permission_callback' => function (WP_REST_Request $request) {
            $configured_token = defined('LAMURINA_DEPLOY_TOKEN')
                ? LAMURINA_DEPLOY_TOKEN
                : get_option('lamurina_deploy_token', '');
            if (empty($configured_token)) {
                return current_user_can('manage_options');
            }
            $header_token = $request->get_header('X-Lamurina-Deploy-Token');
            return hash_equals((string) $configured_token, (string) $header_token);
        },
        'callback' => function (WP_REST_Request $request) {
            $params = $request->get_json_params() ?: [];
            $result = lamurina_live_sync_run($params);
            return new WP_REST_Response($result, 200);
        },
    ]);
});
