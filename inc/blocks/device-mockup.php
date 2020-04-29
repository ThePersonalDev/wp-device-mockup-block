<?php

add_action('init', function () {
  $assets = include(plugin_dir_path(WP_DEVICE_MOCKUP_BLOCK_PLUGIN_FILE) . '/dist/js/blocks/device-mockup.asset.php');

  wp_register_script(
    'tpd-device-mockup',
    plugin_dir_url(WP_DEVICE_MOCKUP_BLOCK_PLUGIN_FILE) . 'dist/js/blocks/device-mockup.js',
    $assets['dependencies'],
    $assets['version']
  );

  register_block_type('tpd/device-mockup', [
    'editor_script' => 'tpd-device-mockup'
  ]);
});