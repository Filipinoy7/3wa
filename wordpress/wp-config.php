<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mindgeek');

/** MySQL database username */
define('DB_USER', 'mindgeek');

/** MySQL database password */
define('DB_PASSWORD', 'mindgeek');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'wA0%wrMeIk[pc= !EQb)ovx|.!SDqT?,I@O&4F9D{IUrPljILPJLZ0I<gNi?Jx=V');
define('SECURE_AUTH_KEY',  '3?GUon1WT:!k%bi(tRFq*~slfTM`pU74^8o0R4ExlpplcdPanulg4:%*QIGnO8j*');
define('LOGGED_IN_KEY',    'oXk0ACSQwttQzTHmrS^X*s+r__SGP??X/0>>xspujliiD?sBTwp99s&L(!<6}1ET');
define('NONCE_KEY',        'A~>;HX_<QC1shk44X.^0tt)%`FP?.(iPZ,i)fj~|-xpBe!~#Wv1JgNMTPG.!.(]L');
define('AUTH_SALT',        'AcJ tAqCk&7|rqQrQ:/-yMFPy.Z|sM{>9Uer|x38?n3nI3l<)`{^UM9N^pfun0<I');
define('SECURE_AUTH_SALT', ';cH]@Q=qUmP>.]B$[-;@+9&;%z {URoi0+5F~.(hz/}2B629=f!P xMB8o<.e&Y|');
define('LOGGED_IN_SALT',   'HoT0pV)#6xia(c{-5*5MjR4=w<LPY]s$lsF0hIyG^]$AT6.H|B.+d<R!Hgj+|Y}%');
define('NONCE_SALT',       '~j6kD|/e*fV8aZ[u$#.0B>c6F,iRW|ER@Z:-&R1_NfM91k)_Gt=mZDVBuBg4UZ%)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'filipinoy_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
