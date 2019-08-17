<?php
  require('./vendor/autoload.php');

  $dotenv = Dotenv\Dotenv::create(__DIR__);
  $dotenv->load();

  define('GCP_KEY', getenv('GCP_KEY') ?: 'AnuGemas');

  require('./pages/home.php');
?>