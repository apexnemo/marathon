<?php 
global $admin;
if (!headers_sent()) {
    header('Access-Control-Allow-Origin: *');
} else {
    // обработкаjhhghfhj ошибки или уведомление разработчикам
}
require_once('funcs.php');
$type = (isset($_REQUEST['type'])&&$_REQUEST['type']?$_REQUEST['type']:'main');

if($type=='php_ajax_call'){
	global $actual_link;
	$actual_link = (isset($_REQUEST['actual_link'])&&$_REQUEST['actual_link']?$_REQUEST['actual_link']:'');
	global $requestnumb;
	my_timezone();
	sql_openconnect();
	if(isset($_REQUEST['requestnumb'])&&$_REQUEST['requestnumb']){
		$requestnumb = $_REQUEST['requestnumb'];
	}
	$data = $_REQUEST['data'];
	my_error_log(date("Y-m-d H:i:s")." ".$data,'eval');
	ob_start();eval($data);$evalresult = ob_get_contents();ob_end_clean();
	$final_output = array();

	if($requestnumb){
		$final_output['request_id'] = $requestnumb;
		$final_output['code'] = $evalresult;
	}
	global $async_variables;
	global $loadpageplz;
	if($async_variables&&is_array($async_variables)&&count($async_variables)&&!$loadpageplz){
		foreach ($async_variables as $key => $value) {
			$final_output[$key] = $value;
		}
	}

	if(count($final_output)){
		echo json_encode($final_output,JSON_UNESCAPED_UNICODE);
	} else {
		echo $evalresult;
	}
	sql_closeconnect();
}







