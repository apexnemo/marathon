<?php
$debug = getallheaders();
global $global_sets;
$headers = getallheaders();
$request_type = (isset($_REQUEST['type'])?$_REQUEST['type']: (isset($headers['type'])?$headers['type']:'') );
global $path;
global $allusers;
$path = str_replace('/run.php', '', __FILE__);
require_once($path.'/php/funcs.php');
global $usersStore;

if($headers&&is_array($headers)&&count($headers)){
	foreach ($headers as $key => $value) {
		$headers[strtolower($key)] = $value;
	}
}
//file_put_contents('debug.txt',json_encode($headers,JSON_UNESCAPED_UNICODE) );
if(isset($headers['fullname'])){
	//file_put_contents('debug.txt',json_encode(223,JSON_UNESCAPED_UNICODE) );
	$fullName = (isset($_REQUEST['fullname'])?$_REQUEST['fullname']: (isset($headers['fullname'])?$headers['fullname']:'') );
	$photo = (isset($_REQUEST['photo'])?$_REQUEST['photo']: (isset($headers['photo'])?$headers['photo']:'') );
	$userId = (isset($_REQUEST['userid'])?$_REQUEST['userid']: (isset($headers['userid'])?$headers['userid']:'') );
	create_user($userId,$fullName,$photo);
 
} else if(isset($headers['predoplata'])){
	$user = 0;
	foreach ($allusers as $key => $value) {
		if($key==$headers['predoplata']){
			$user = get_user_info($value);
		}
	}
	if(!$user){
		$user = $usersStore->findOneBy(array('id','=',$headers['predoplata']));
	}
	if($user){
		edit_user($user['_id'],'predo',1);
		$smr = (isset($global_sets['smr'])?$global_sets['smr']:'5');
		edit_user($user['_id'],'timer',time()+((86400*(int)$smr)+7200) );
		add_to_php_list($user['id'],$user['_id'],'/php/predoplata.php');
		add_to_php_list($user['id'],$user['_id'],'/php/usersingame.php');
	}
} else if(isset($headers['buy'])){
	$user = 0;
	foreach ($allusers as $key => $value) {
		if($key==$headers['buy']){
			$user = get_user_info($value);
		}
	}
	if(!$user){
		$user = $usersStore->findOneBy(array('id','=',$headers['buy']));
	}
	if($user){
		edit_user($user['_id'],'predo',11);
		remove_from_php_list($user['id'],'/php/usersingame.php');
		remove_from_php_list($user['id'],'/php/predoplata.php');
		add_to_php_list($user['id'],$user['_id'],'/php/oplata.php');
	}  
} else { 
	if($request_type=='save'){
		//file_put_contents('debug.txt',json_encode(111,JSON_UNESCAPED_UNICODE) );
		$entityBody = file_get_contents('php://input');
		$entityBody = json_decode($entityBody,1);

		$set = $entityBody['set'];
		file_put_contents($path.'/php/set.php','<?php //'.base64_encode($set).'?>end' );
	}if($request_type=='isready'){
		echo json_encode(array('answer'=>1),JSON_UNESCAPED_UNICODE);
	}
}




?>