<?php

add_action('init', function () {
  $assets = include(WP_DEVICE_MOCKUP_BLOCK_PLUGIN_FILE . '/dist/js/blocks/device-mockup.asset.php');

  wp_register_script(
    'tpd-device-mockup',
    WP_DEVICE_MOCKUP_BLOCK_PLUGIN_FILE . '/dist/js/blocks/device-mockup.js',
    $assets['dependencies'],
    $assets['version']
  );

  register_block_type('tpd/device-mockup', [
    'editor_script' => 'tpd-device-mockup'
  ]);
});