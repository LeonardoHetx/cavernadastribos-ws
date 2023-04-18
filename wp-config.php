<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


 
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vpnchu28_wp90' );
/** Database username */
define( 'DB_USER', 'vpnchu28_wp90' );
/** Database password */
define( 'DB_PASSWORD', '0D64]JY@pS' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ssnnicyhdjnzjrzarfsmggzfr8myxs4txaue3e4owbkqteyscvsdd7ngzw4q21uh' );
define( 'SECURE_AUTH_KEY',  'ocsmi1ottmrllwmybopcl8zibmbzhrfqaqdyq2ahfh6spvhprsnee4vslahpwssg' );
define( 'LOGGED_IN_KEY',    'vdnb2a9xw6klhadbmwrj4ceeycnm0ksfij3n1pzfwkaawiuanal7ffkrrchhg6cw' );
define( 'NONCE_KEY',        'd83nbk6t2zpdcyiwa5o9dgpwqy3afhlsmpy5ct5nfit7poq9dxnhgcleavu8fy9r' );
define( 'AUTH_SALT',        'u06y9vfolcwpn5jetyi3bzfkzzouxaxbiqxawlfqpbx2akeggsqvelkx2taukqya' );
define( 'SECURE_AUTH_SALT', 'nczigc4ow4mq4a9m7stq4cmhqli0hmdlrmfdwyav0ylwrzh8vih0bntrnq94ndeu' );
define( 'LOGGED_IN_SALT',   '55ndgdoqpi6c7ag2vfs5tlxwgqfrh73nga9vcpnnbcxzgjhjvmbeonapcphyzarv' );
define( 'NONCE_SALT',       'wkzdz1eaibg6lksb7hfbsmc5vgtzxp37vpwxbi3fthfp1d2xh60prczlz5qdvxst' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp2d_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';