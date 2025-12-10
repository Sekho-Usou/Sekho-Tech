<?php
// server/config.php
// IMPORTANT: change these values to your hosting DB credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'sekhotech');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_pass');

// Base URL of your site, used in email links (no trailing slash)
define('BASE_URL', 'https://sekhotech.com');

// Email "From" address for system mails
define('MAIL_FROM', 'no-reply@sekhotech.com');
define('MAIL_FROM_NAME', 'Sekho Tech Solutions');

// Optional: configure SMTP here if PHP mail() doesn't work
// You can use PHPMailer later and put credentials here
// define('SMTP_HOST','smtp.example.com');
// define('SMTP_USER','smtpuser');
// define('SMTP_PASS','smtppass');
// define('SMTP_PORT',587);
