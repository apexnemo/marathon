<?php 
global $global_sets;global $global_url;global $global_domain;global $global_folder;
global $path;
$path = str_replace('/index.php', '', __FILE__);
require_once($path.'/php/funcs.php');
$page = (isset($_REQUEST['page'])&&$_REQUEST['page']?$_REQUEST['page']:'crm');
$pagepub = (isset($_REQUEST['p'])?$_REQUEST['p']:'');
if(isset($_REQUEST['p'])){

  require_once($path.'/indexpub.php');
  return false;
}
//LOGOUT
if(isset($_REQUEST['out'])){
  session_start();
  // Unset all of the session variables
  $_SESSION = array();
  // Destroy the session.
  $_SESSION["m_loggedin"] = 5;
  header("location: ".$global_url);
  exit;
}

ob_start(); ?> 
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Марафон: <?php echo $global_sets['5572'];?></title>
    <link rel="stylesheet" href="sources/bootstrap.min.css?v=1.0">
    <link rel="stylesheet" href="sources/admin.css?v=1.0">
    <link rel="stylesheet" href="sources/igro.css?v=1.0">
    <link rel="shortcut icon" href="sources/img/fav.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:image" content="'.decode_cusnewlines($_REQUEST['s1k']).'">
    <script type="text/javascript" src="sources/jquery.js"></script>
    <script type="text/javascript" src="sources/js.js"></script>
    <script type="text/javascript" src="sources/admin.js"></script>
    <script type="text/javascript" src="sources/tinymce/tinymce.min.js"></script>
    <script>(function($) {"use strict";$(document).ready(function() {window.mainrequesturl = '<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."/php/acc.php";?>';});})(jQuery);</script>
    <style>@font-face {font-family: 'i';src: url('sources/fonts/im.woff2') format('woff2'),url('sources/fonts/im.woff') format('woff'); font-weight: 400;font-style: normal;}</style>
    <link href="sources/awesome/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" media="screen" type="text/css" href="sources/colorpicker/css/colorpicker.css" />
    <script type="text/javascript" src="sources/colorpicker/js/colorpicker.js"></script>
    <style>
    @font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Bold.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Bold.woff') format('woff');font-weight: bold;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Light.woff2') format('woff2'), url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Light.woff') format('woff');font-weight: 300;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Roman.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Roman.woff') format('woff');font-weight: normal;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Black.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Black.woff') format('woff'); font-weight: 900;font-style: normal;}
@font-face {font-family: 'i';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/im.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/im.woff') format('woff'); font-weight: 400;font-style: normal;}  
</style>
  </head>
  <body class="admin">{{body}}</body>
</html>

<? $markup = ob_get_contents();ob_end_clean();
global $crm_pages;
$crm_pages = array(
  'crm'  =>  array('role'=>'all','title'=>'CRM','name'=>'CRM','fa'=>'fa-user'),
  'mess' =>  array('role'=>'admin','title'=>'Рассылка','name'=>'Рассылка','fa'=>'fa-envelope-o'),
  'site' =>  array('role'=>'admin','title'=>'Сайты','name'=>'Сайты','fa'=>'fa-drivers-license-o'),
);
$body = '';
session_start();
if(!is_logined()){
  $body .= '<div class="init_login" style="width: 300px;margin: 0 auto;min-height: 100vh;padding: 40px 0;"><div class="th_out"><div class="th_in">';
  ob_start();require_once($path.'/sources/html/head.php');$html = ob_get_contents();ob_end_clean();
  $body .= '<div class="igrotitle_wrap">'.$html.'</div>';
  $body .= '
  <form class="ajax_form">
  '.get_field(array('form'=>'field','id'=>'usr','type'=>'text','mbot'=>'5','name'=>'Логин','placeholder'=>'admin','value'=>'')).'
  '.get_field(array('form'=>'field','id'=>'pass','type'=>'password','mbot'=>0,'name'=>'Пароль','placeholder'=>'password','value'=>'')).'
'.magic_button(array("name"=>'Войти',"reload"=>0,'style'=>'',"styling"=>"","php"=>'
                            mraphon_login("{usr}","{pass}");
                        ','jsafter'=>'var returnedcode = JSON.parse(phpvar{requestnumb})["code"];if(returnedcode=="ready"){location.reload();} else {alert(returnedcode);}','jsbefore'=>'')).'
</form>
  </div></div><style>body{padding: 0;}</style></div>';
} else {
  $menu_code = '';
  foreach ($crm_pages as $key => $value) {
    $roles = explode(',', $value['role']);
    $allow = 0;
    if(in_array('all', $roles)){
      $allow = 1;
    }if(in_array('traf', $roles)&&is_crmrole('traf')){
      $allow = 1;
    }if(in_array('support', $roles)&&is_crmrole('support')){

      $allow = 1;
    }if(in_array('sales', $roles)&&is_crmrole('sales')){
      $allow = 1;
    }if(!in_array('mega', $roles)&&is_crmrole('admin')){
      $allow = 1;
    }if(in_array('mega', $roles)&&is_crmrole('mega')){
      $allow = 1;
    }
    if($allow==1){
      $overtime = '';
      if($key=='mes'){
      }
      if($key=='crm'){

      }
      if($key=='func'){
      }
      $menu_code .= '<div class="admin_menu_li_wrap '.$key.'"><div class="overtime noselect '.($overtime?'active':'').'">'.$overtime.'</div><a '.(isset($value['new'])&&$value['new']?'target="_blank"':'').' href="'.$global_url.'/?page='.$key.'" class="admin_menu_li '.($page==$key?'active':'').' '.(isset($value['class'])?$value['class']:'').'" data-request="'.$key.'">'.(isset($value['marker'])?$value['marker']:'').'<div class="th_out"><div class="th_in"><div class="admin_menu_i"><i class="fa '.$value['fa'].'"></i></div><div class="admin_menu_name">'.$value['name'].'</div></div></div></a></div>';
    }
  }
  $menu_code .= (1?'<a href="'.$global_url.'/?out" class="admin_menu_li"><div class="th_out"><div class="th_in"><div class="admin_menu_i"><i class="fa fa-sign-out"></i></div><div class="admin_menu_name">EXIT</div></div></div></a>':'');

  ob_start();require_once($path.'/php/page/'.$page.'.php');$html = ob_get_contents();ob_end_clean();
  $body .= '<header><div class="admin_menu">'.$menu_code.'</div></header>'.$html.($global_sets['5573']=='kozyon'?'<div class="user_info admin" data-username="kozyon" data-crmid="19" data-inteam="1"></div>':'');
}

$markup = str_replace('{{body}}', $body, $markup);
echo $markup;


