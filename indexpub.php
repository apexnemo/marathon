<?php
//$global_sets
$pagepub = (isset($_REQUEST['p'])?$_REQUEST['p']:'');
$botid = (isset($_REQUEST['botid'])&&$_REQUEST['botid']?$_REQUEST['botid']:'');
$days = (isset($global_sets['days'])?$global_sets['days']:7);
$sellday = (isset($global_sets['sell'])?(int)$global_sets['sell']:4);
$trueset = $global_sets; 
$comon = '';
if(!$botid){
	$comon = '<h4 style="font-family: sans-serif;text-align: center;font-size: 20px;padding-top: 20px;">Пользователь не указан</h4>';
}
$user = find_user($botid);
if($botid=='0000000'){
	$user = json_decode('{"name":"\u0414\u0435\u043d\u0438\u0441 \u041a\u043e\u0437\u0438\u043e\u043d\u043e\u0432","day":7,"m":1,"s":4,"dz":0,"life":3,"b":8,"upd":1613010085,"ava":"https:\/\/messenger.smartsender.com\/storage\/projects\/51821\/aqbgBl79UEH2t6EFjfiuwFITiVYV9W28SLjD1RFN.jpeg","id":"7909763","_id":0,"dozh1":1,"dozh2":1,"predo":11}');
}
if(!$user){
	$comon = '<h4 style="font-family: sans-serif;text-align: center;font-size: 20px;padding-top: 20px;">Пользователь не зарегистрирован</h4>';
}
$id = $user['_id'];
$style = 'body,.menu_inner {background:'.(isset($global_sets['bgc'])?$global_sets['bgc']:'#ffffff').';}
.social_wrap a i {color:'.(isset($global_sets['bgc'])?$global_sets['bgc']:'#ffffff').';}
.menu_holder {background: '.(isset($global_sets['mnc'])?$global_sets['mnc']:'#ffffff').';}
';
$logo = (isset($global_sets['logo'])?$global_sets['logo']:'https://'.$trueset['5571'].'/'.$trueset['5572'].'/sources/img/logo.png');
ob_start(); ?> 
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title><?php echo ($pagepub==100?'Призы марафона':$global_sets['tt'.$pagepub]) ;?></title>
    <link rel="stylesheet" href="sources/bootstrap.min.css?v=1.0">
    <link rel="stylesheet" href="sources/css.css?v=1.0">
    <link rel="stylesheet" href="sources/igro.css?v=1.0">
    <link rel="shortcut icon" href="sources/img/fav.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:image" content="'.decode_cusnewlines($_REQUEST['s1k']).'">
    <script type="text/javascript" src="sources/jquery.js"></script>
    <script type="text/javascript" src="sources/js.js"></script>
    <script type="text/javascript" src="sources/tinymce/tinymce.min.js"></script>
    <script>(function($) {"use strict";$(document).ready(function() {window.mainrequesturl = '<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."/php/acc.php";?>';});})(jQuery);</script>
    <style>@font-face {font-family: 'i';src: url('sources/fonts/im.woff2') format('woff2'),url('sources/fonts/im.woff') format('woff'); font-weight: 400;font-style: normal;}</style>
    <link href="sources/awesome/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  	<?php echo '<style>'.$style.'</style>';?>
  	<style>
  	@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Bold.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Bold.woff') format('woff');font-weight: bold;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Light.woff2') format('woff2'), url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Light.woff') format('woff');font-weight: 300;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Roman.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Roman.woff') format('woff');font-weight: normal;font-style: normal;}
@font-face {font-family: 'f';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Black.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/f-Black.woff') format('woff'); font-weight: 900;font-style: normal;}
@font-face {font-family: 'i';src: url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/im.woff2') format('woff2'),url('<?php echo "https://".$global_sets['5571']."/".$global_sets['5572']."";?>/sources/fonts/im.woff') format('woff'); font-weight: 400;font-style: normal;}	
</style>
  </head>
  <body class="hasmenu"><section>
<div class="menu_holder">
	<div class="container relative">
		<div class="row">
			<div class="col-10"><div style="background-image:url(<?php echo decode_cusnewlines($logo);?>);width: 100%;height: 50px;background-size: contain;background-repeat: no-repeat;"></div></div>
			<div class="col-2"><div id="burger-menu" class=""><div id="burger"><span></span><span></span><span></span></div></div></div>
		</div>
		<div class="menu_wrap"><div class="menu_inner">
			<div class="menu_list"><ul>
			<?php
			$mln = (isset($global_sets['mln'])?$global_sets['mln']:'Наш Инстаграм');
			$mll = (isset($global_sets['mll'])?$global_sets['mll']:'https://instagram.com/kozyon');
			$mli = (isset($global_sets['mli'])?$global_sets['mli']:'fa-instagram');
			$c = '<li data-var="" class=""><a class="'.($pagepub==0?'active':'').' vvedenie" href="https://'.$global_sets['5571'].'/'.$global_sets['5572'].'/?p='.'0'.'&botid='.$botid.'">Введение</a></li>';
			for ($i=1; $i <= $sellday; $i++) { 
				$c .= '<li data-var="" class=""><a class="'.($pagepub==$i?'active':'').' lesson'.$i.'" href="https://'.$global_sets['5571'].'/'.$global_sets['5572'].'/?p='.$i.'&botid='.$botid.'">Урок '.$i.'</a></li>';
			}
			$c .= '<li data-var="" class=""><a class="'.($pagepub==100?'active':'').' prizi" href="https://'.$global_sets['5571'].'/'.$global_sets['5572'].'/?p='.'100'.'&botid='.$botid.'">Призы</a></li>';
			echo $c;
			?>
			</ul>
				<div class="social_wrap">
                    <a class="soc" target="_blank" href="<?php echo $mll;?>">
                        <i class="fa <?php echo $mli;?>"></i>
                        <div class="social_name"><?php echo $mln;?></div>
                    </a>
                </div><small>СЕРВИС «ИГРОМАРАФОН»<br><a style="text-decoration: underline;color: #111;font-size: 12px;" href="https://kozyon.com">kozyon.com</a></small></div>
			</div>
		</div>
</div></div>

<div class="contentloadr">
<div class="pagebuilder art_body">
<div class="container">
<div class="user_info" data-funcgroupid="46" data-issupport="" data-inteam="1" data-slug="sam" data-crmid="19" data-id="271" data-botid="<?php echo $botid;?>"></div>
	{{body}}
</div>
</div>
</div>


</section>
<footer>
	<div class="container">
		<div class="footer_content_holder">
			<div class="menu_list"><ul>
			<?php
			echo $c;
			?>
			</ul>
			<div class="social_wrap">
                <a class="soc" target="_blank" href="<?php echo $mll;?>">
                    <i class="fa <?php echo $mli;?>"></i>
                    <div class="social_name"><?php echo $mln;?></div>
                </a>
            </div>
		</div>
			<small style="margin-top: 70px;display: block;">СЕРВИС «ИГРОМАРАФОН»<br><a style="text-decoration: underline;color: #afafaf;font-size: 13px !important;" href="https://kozyon.com">kozyon.com</a></small>
		</div>
	</div>
</footer>
</body>
</html>
<? $markup = ob_get_contents();ob_end_clean();
$pageconstructor = array('stats','video',array('text'=>'o'),'start','dz','tarif','comm');
function all_elems($id,$type,$pagepub,$user){ 
	global $global_sets;
	$trueset = $global_sets; 
	$sellday = (isset($global_sets['sell'])?(int)$global_sets['sell']:4);
	$cls = (isset($global_sets['cls'])?$global_sets['cls']:3);
	$hrt = (isset($global_sets['hrt'])?$global_sets['hrt']:'https://'.$trueset['5571'].'/'.$trueset['5572'].'/sources/img/life_f.png'); 
	$str = (isset($global_sets['str'])?$global_sets['str']:'https://'.$trueset['5571'].'/'.$trueset['5572'].'/sources/img/star.png');
	global $global_sets;
	
	$code = '';
	if(is_array($type)&&isset($type['text'])&&$pagepub!=100){
		$txt = decode_cusnewlines($global_sets[$type['text'].$pagepub]);
		preg_match_all('/(width|height)="[^\"]*"/', $txt, $matches);
			if(count($matches[0])){
				foreach ($matches[0] as $key => $value) {
					$txt = str_replace($matches[0][$key], 'class="img nomargin"', $txt);
				}
			} 
		$code .= $txt;
	}
	if($type=='tarif'){
		$cur = (isset($global_sets['cur'])?$global_sets['cur']:'руб');
		if($pagepub!=$sellday){
			return '';
		}
		
		$myset = array_decode($global_sets['tar']); 
		$code .= '<style>.pri_cool{border-color: '.(isset($global_sets['bgc'])?$global_sets['bgc']:'#ffffff').' !important;}.pri_cool:before,.pri_cool:after {background:'.(isset($global_sets['bgc'])?$global_sets['bgc']:'#ffffff').';}</style>';
		if($myset&&is_array($myset)&&count($myset)){
			foreach ($myset as $key => $value) {
				if(isset($user['predo'])&&$user['predo']&&$value['pp']){
					continue;
				}
				$is_sale = (isset($user['timer'])&&isset($global_sets['sd'])&&$global_sets['sd']&&time()<((int)$user['timer'])   );
				$is_sale_end = ($is_sale?0:  ($value['pf']&&isset($user['timer'])&&$global_sets['sd']&&time()>((int)$user['timer'])?1:0)  );
				$is_predo = isset($user['predo'])&&$user['predo'];
				$pp = (isset($global_sets['pp'])?$global_sets['pp']:'1000');
				$final_price = ($is_predo?(int)$value['p']-(int)$pp:$value['p']);
				$code .= '<div class="elem_wrap parent game tarif" style="margin-bottom:35px;">
							<div class="pri_col shadow_wrap hard">

									<div class="priwrap" data-price="'.$value['p'].'">
										<div style="text-align:center;">
											<div class="hdr"><span>ТАРИФ</span></div>
											
											<div class="priname">'.$value['n'].'</div>
											'.($is_predo?'<div class="partpaydone"><i class="fa fa-check"></i> Частичная оплата внесена</div>':'').'
											<div class="txt"></div>
											
											'.($value['pf']?'<div class="pripri_full '.($is_sale_end?'':'pripri_line').'">'.number_format($value['pf']).'<span><del class="self_rub" style="font-size: 60.2%; font-weight: 600; text-decoration: none;">'.$cur.'.</del></span></div>':'').'
											<div></div>
											'.(!$is_sale_end?'<div class="pripri">'.number_format($final_price).'<span><del class="self_rub" style="font-size: 50.2%; font-weight: 600; text-decoration: none;">'.$cur.'.</del></span></div>':'').'
											'.($is_sale&&$value['pf']?'<div class="pripri_full_timer">Осталось до конца скидки:<div class="lil_countdown" data-time="'.$user['timer'].'"></div></div>':  ($is_sale_end?'<div class="pripri_full_timer" style="margin-top: 10px;">Скидка закончилась</div>':'')  ).'
											<!--<div class="rassrochech">Рассрочка: от <b>4,490</b><del class="self_rub" style="font-size: 50.2%; font-weight: 600; text-decoration: none;">'.$cur.'.</del>/мес</div>-->
											
										</div>
										<div class="pri_cool"></div>
										<div class="txt2">';
$desc = $value['d'];
if(!$value['ls']){
	$code .= $desc;
} else {
	$desc = explode("\n", $desc);
	foreach ($desc as $k => $v) {
		if($k==0||$k%2==0){
			if($v){
				$code .= '<div class="p_li">
<div class="p_name">'.$v.'</div>
<div class="p_line"></div>
<div class="p_num" style="color:'.($desc[$k+1]=='Да'||$desc[$k+1]=='да'?'#8ed450':'').''.($desc[$k+1]=='Нет'||$desc[$k+1]=='нет'?'#d0442c':'').' ;">'.(isset($desc[$k+1])?$desc[$k+1]:'').'</div>
</div>';
}
		}
	}
} 



$code .= '</div>
<style>#elu7ox6gt57 {display:none;} #elj7vg63qeir{display:none;}</style>
<div class="tarf_buttons"><div class="wrap_shadow" style="max-width: 300px;margin:0 auto;"><div><div class="button_builder button_wrap succdonthide">
    '.($value['lz']?'<a style="margin-bottom: 5px;background: #3c3c3c;padding: 15px 0;" href="'.$value['lz'].'" target="_blank" class="btn-p "><div class="btn_name">Задать вопрос</div> </a>':'').'
    </div><div class="button_builder button_wrap succdonthide">
    '.($value['lr']?'<a style="margin-bottom: 5px;background: #3c3c3c;padding: 15px 0;" href="'.$value['lr'].'" target="_blank" class="btn-p "><div class="btn_name">Узнать о рассрочке</div> </a>':'').'
    <div data-evalnum="515426151976064558" class="taken"></div></div><div class="button_wrap nerol neros"><div class="button_builder button_wrap succdonthide">
    <a style="padding: 15px 0;" href="'.($is_sale_end&&$value['lf']?$value['lf']:$value['l']).($is_predo?$value['l2']:'').'" target="_blank" class="btn-p flasher"><div class="btn_name">Оплатить</div> </a> 
    </div></div></div></div></div><!--<div class="rassrochech" style="text-align: center;padding-top: 10px;padding-bottom: 15px;">Рассрочка: от 4,490<del class="self_rub" style="font-size: 60.2%; font-weight: 600; text-decoration: none;">Р.</del>/мес<br></div>-->
										
									</div>
								</div><div id="elj7vg63qeir" class="elem_wrap   over" style="margin-bottom:35px;"><div class="over_placeholder"><div class="container"><div class="over_placeholder_inner asq_qq"><div class="over_wrap exitable click" data-onclick="asq_q2"><div class="close"></div><div><h4>Задай свой вопрос</h4><p>Обычно мы отвечаем на вопросы в течении часа, но время может растянуться и до 24 часов</p><div id="el4303" class="elem_wrap   form" style="margin-bottom:0px;"><form class="ajax_form"><div class="form-group     textarea fr4303" style=" "><textarea class=" form-control " id="4303" placeholder="Мой вопрос таков..." rows="5" style="height: 32px;"></textarea></div><div class="shadow_wrap succdonthide"><div><div class="button_builder button_wrap succdonthide"><div data-success="s" class="success long"><div class="sc">Отлично!</div></div>
    <div class="" data-eval="343364968102254659712"><a class="btn  btn_from_form ">Задать вопрос</a></div>
    <div data-evalnum="343364968102254659712" class="taken"></div></div></div></div></form></div><!--bcm~!@er4303--><!--bcm~!@erhuj86t6ac7--></div></div></div></div></div></div><!--bcm~!@erj7vg63qeir--><div id="elu7ox6gt57" class="elem_wrap   over" style="margin-bottom:35px;"><div class="over_placeholder"><div class="container"><div class="over_placeholder_inner paypop"><div class="over_wrap exitable click" data-onclick="btn-pay2"><div class="close"></div><div><div class="pri_ways active  carder"><div class="head noselect"><span>Способ №1</span><br>Оплата картой</div><div class="body">
							<div class="button_builder button_wrap succdonthide">
    <a data-eval="780431574128304787510" class="btn"><div class="btn_name">Запрос</div> </a>
    <div data-evalnum="780431574128304787510" class="taken"></div></div>
						<p style="font-size: 14px;margin-bottom: 20px;">
Самый простой способ покупки — оплата полной стоимости продукта. Заплатил один раз, больше не вспоминаешь и учишься!</p>
						
			
						</div></div><p style="font-size: 14px;margin-bottom: 20px;padding: 0 10px;">Если у тебя нету возможности оплатить все сразу ты можешь разбить платежи. 70% учеников идут на обучение по рассрочке. 30% учеников окупают обучение до его завершения.</p><div class="pri_ways yapart"><div class="head noselect"><span>Способ №2</span><br>Яндекс Заплатить частями для РФ</div><div class="body">
<div class="button_builder button_wrap succdonthide">
    <a data-eval="1553226407187078190411" class="btn"><div class="btn_name">Запрос</div> </a>
    <div data-evalnum="1553226407187078190411" class="taken"></div></div>
<p style="font-size: 14px;margin-bottom: 20px;">За 3 минуты оформления рассрочки алгоритмы Яндекса решат дать ли тебе возможность заплатить частями. Если все хорошо, то тебе нужно будет каждый месяц пополнять свой аккаунт Яндекс Деньги на 2-3 тыс рублей. Одобряют рассрочку не всем, такое случается даже у людей, которые никогда не брали кредиты и ведут стабильную предпринимательскую карьеру, но попробовать стоит.</p>




							</div></div><div class="pri_ways tink"><div class="head noselect"><span>Способ №3</span><br>Тинькофф рассрочка для РФ</div><div class="body">
<p style="font-size: 14px;margin-bottom: 20px;">Тинькофф Банк — имеет самый крутой сервис из-за гибких условий и высокого % одобряемости рассрочки. Алгоритм за 3 минуты принимается решение выдавать ли тебе рассрочку. На следующий день к тебе подъедет курьер для подписания договора и доставит карту, на которую нужно будет переводить раз в месяц 2-3 тыс рублей.</p>



							


							</div></div></div></div></div></div></div></div><!--bcm~!@eru7ox6gt57--></div>';
			}
			
		}
	}
	if($type=='dz'){
		if($pagepub!=0&&isset($global_sets['d'.$pagepub])&&$global_sets['d'.$pagepub]){
			$dztit = (isset($global_sets['dztit'])?$global_sets['dztit']:'Домашнее задание');
			$code .= '<div class="dz_area">';
			$code .= '<div class="dz_area_title">'.str_replace(' ', '<br>',$dztit).'</div>';
			$dzer = decode_cusnewlines($global_sets['d'.$pagepub]);
			preg_match_all('/\[codedz_(.*)\]/', $dzer, $matches);
			if(count($matches[0])){ 
				foreach ($matches[0] as $key => $value) {
					$dzer = str_replace($matches[0][$key], '<span class="dz_cheker copyme">short:'.$id.':dz'.$matches[1][$key].'</span>', $dzer);
				}
			} 
			preg_match_all('/(width|height)="[^\"]*"/', $dzer, $matches);
			if(count($matches[0])){
				foreach ($matches[0] as $key => $value) {
					$dzer = str_replace($matches[0][$key], '', $dzer);
				}
			}
			$code .= $dzer;

			$code .= '</div>';
		}if($pagepub==0){
			$code .= decode_cusnewlines($global_sets['d'.$pagepub]);
		}

	}
	if($type=='comm'&&$pagepub!=100){
		$counter = get_php_list('/php/counter.php');
		$comuniq = (isset($global_sets['comuniq'])?$global_sets['comuniq']:0);
		$commentpageid = ($comuniq?($pagepub==0?1:0):0);
		$comments_num = (isset($counter['com'.$commentpageid])?$counter['com'.$commentpageid]:0);

		if(isset($global_sets['cm'.$pagepub])&&!$global_sets['cm'.$pagepub]){
			return '';
		}

		$comarray = array(
        'bot_id'=>$user['id'],
        'funcgroupid'=>'',
        'buy'=>'',
        'comments_num'=>$comments_num,
        'id'=>$id,
        'offset'=>0,
        'num'=>40,
        'style'=>'',
        'page_id'=>$commentpageid,
        'json'=>0 );
    $allcomments = get_comments_list($comarray)['code'];
    
    $code .= '
	    <div id="comments" class="com_wrap" data-pageid="'.$commentpageid.'" data-id="'.$id.'">
	        <div></div>
	        '.(isset($valueer['hd'])&&$valueer['hd']?'
	            <div style="font-family: i;text-transform: uppercase;font-size: 35px;color: #dadada;line-height: 1;">Комментарии</div>
	            ':'').'
	        <div class="com_head">
	        	<div>'.plural_form($comments_num,array('комментарий','комментария','комментариев')).'</div>
	        </div>
	        '.(isset($valueer['hd'])&&$valueer['hd']?'
	            <div class="com_avas">
	                '.$avas.'
	            </div>
	            <div class="pokcomm" style="margin-top: 0;border: 2px solid #e4e4e4;background: transparent !important;width: 100%;color: #b7b7b7 !important;padding: 16px 44px;text-align: center;border-radius: 10px;">Показать все <i class="fa fa-angle-down"></i></div>
	            <script>(function($) {"use strict";$(document).ready(function() {
	                $(".pokcomm").on("click",function(){
	                    $(".com_wrap").addClass("active");
	                });
	            });})(jQuery);</script>
	        ':'').'
	        <div class="com_answer_to">Ответ: @<div>Denis Kozionov</div>
	            <span>После отправки сообщения пользователь получит уведомление в свой мессенджер</span><b><i class="fa fa-times"></i> Отменить</b>
	        </div>
	        <form class="ajax_form comment">
	            '.get_field(array('form'=>'field','id'=>'parentarea','type'=>'hidden')) .'
	            '.get_field(array('form'=>'textarea','row'=>1,'id'=>'commentarea','placeholder'=>'Напиши комментарий...','type'=>'text','empty'=>'Твой комментарий пуст','name'=>'','desc'=>'','value'=>'' )) .'
	            <div class="send_comment_wrap">'.magic_button(array('name'=>'Отправить','style'=>'btn send_comment',
	                'jsbefore'=>'
	                    $(".send_comment .btn_name").text("Отправка...");
	                ','jsafter'=>'
	                    run_comments($(".pre_com_holder"),1);
	                    $(".send_comment .btn_name").text("Отправить");
	                    $("#commentarea").val("");
	                    $("#parentarea").val("");
	                    $(".com_answer_to").removeClass("active");
	                    $([document.documentElement, document.body]).animate({
	                        scrollTop: $(".com_holder").offset().top-80
	                    }, 300);
	                ',
	                'php'=>'
	                global $elemvariable;
	                $elemvariable = "{commentarea}";
	                global $async_variables;
	                $async_variables["elemvariable"] = "{commentarea}";
	                $link = "https://'.$trueset['5571'].'/'.$trueset['5572'].'/?p='.$pagepub.'&botid='.$user['id'].'";
	                $async_variables["elemvariable2"] = $link."#comments";
	                 
	                add_comment('.$id.',"'.$user['id'].'","{parentarea}","{commentarea}",'.$commentpageid.');
	                ','asyncphp'=>'
	                    decode_async_globals("\'+encodeforasync(phpvar{requestnumb})+\'");
	                ')).'
	            </div>
	       </form>

	        <div class="pre_com_holder"></div>
	        <div class="com_holder">
	            '.$allcomments.'
	        </div>
	        '.(isset($onclick)?'<div class="eval_code">'.$onclick.'</div>':'').'
	        <div class="btn morecomments" data-offset="40" data-pageid="'.$commentpageid.'"><i class="fa fa-angle-down"></i> <span>Показать больше</span></div>
	    </div>
	    ';
	}if($type=='comm'&&$pagepub==100) {
		if(isset($global_sets['prz'])&&$global_sets['prz']){
			$prz = array_decode($global_sets['prz']);
			
			$b_num = 1;
			foreach ($prz as $key => $value) {
				$code .= '<div class="elem_wrap" style="margin-bottom: 80px;">';
				$code .= '<div class="widecont"><div><img style="border-radius: 5px;" alt="" src="'.$value['i'].'"></div></div>';
				$code .= '<h3>'.$value['n'].'</h3>';
				$is_bought = isset($user['b'.$b_num]);
				$code .= '<div style="
    font-weight: 600;
    margin-bottom: 15px;
    color: #999;
">Цена: <div style="
    display: inline-block;
    width: 30px;
    position: relative;
"><span style="
    background-image: url('.$str.');
    width: 30px;
    height: 30px;
    display: inline-block;
    background-size: contain;
    background-position: center;
    position: absolute;
    left: 0;
    background-repeat: no-repeat;
    top: -50%;
    margin-top: -23px;
    "></span></div> '.$value['c'].'</div>

    ';
				$code .= '<p>'.$value['d'].'</p>';
				if($user['b']>=(int)$value['c']||$is_bought){
					$code .= '<div class="shadow_wrap">';
					if($is_bought){
						$code .= magic_button(array("name"=>'<i class="fa fa-save"></i> Получить','href'=>$value['r'],'blank'=>1,'style'=>'savebutton flasher btn',"styling"=>"color:".(isset($global_sets['strbc'])?$global_sets['strbc']:'#ffffff').";    width: 100%;background-color:".(isset($global_sets['strbbg'])?$global_sets['strbbg']:'#111111').";","php"=>'
							')); 
					} else {
						$code .= magic_button(array("name"=>'<i class="fa fa-lock"></i> Разблокировать','reload'=>1,'confirm'=>'Потратить бонусы за этот приз?','style'=>'savebutton flasher btn',"styling"=>"color:".(isset($global_sets['strbc'])?$global_sets['strbc']:'#ffffff').";    width: 100%;background-color:".(isset($global_sets['strbbg'])?$global_sets['strbbg']:'#111111').";","php"=>'
							edit_user('.$id.',"b",'.($user['b']-$value['c']).');
							edit_user('.$id.',"b'.$b_num.'",1);
							')); 
					}
					
					$code .= '</div>';
				} else {
					$code .= '<div class="empty_area" style="padding: 20px;"><h5 class="nomargin">Получить пока нельзя</h5></div>';
				}
				//$code .= $value['r'];

				$code .= '</div>';
				$b_num++;
			}
			
		}
	}
	if($type=='start'){
		if($pagepub==0){ 
			if($user['day']==0){
				$code .= '<div style="text-align:center;">';

				$code .= magic_button(array("name"=>'Начать игру',"href"=>'https://'.$trueset['5571'].'/'.$trueset['5572'].'/?p=1&botid='.$user['id'],'style'=>'savebutton big btn animate__animated animate__jello animate__infinite',"styling"=>"color:".(isset($global_sets['strbc'])?$global_sets['strbc']:'#ffffff').";background-color:".(isset($global_sets['strbbg'])?$global_sets['strbbg']:'#111111').";","php"=>'
					edit_user('.$id.',"day",1);
					edit_user('.$id.',"l1",'.(time()+($cls*86400) ).' );
					'.(isset($global_sets['dl1'])&&$global_sets['dl1']?'run_func('.$id.',"dl1","'.$global_sets["dl1"].'");':'').'
					remove_from_php_list("'.$user['id'].'","/php/vvedenie.php");
					'));
				$code .= '</div>';
			} else {
				$code .= '<div class="empty_area" style="max-width: 300px;padding: 20px;margin: 0 auto;">Игра началась</div>';
			}

		}
	}
	if($type=='stats'){ 
		$name = (str_replace(' ', '', $user['name'])?$user['name']:'Анонимный Игрок');
				$name = explode(' ', remove_emoji($name));
				$name = array_filter($name);
				if(count($name)==1){
					array_unshift($name,'Игрок');
				}
				$namecode = '';
				foreach ($name as $k => $v) {
					if($k<2){
						$namecode .= ($k!=0?'':'').'<div>'.$v.'</div>';
					}
				}
		

		$strt = (isset($global_sets['strt'])?$global_sets['strt']:'Мои звезды');
		$strc = (isset($global_sets['strc'])?$global_sets['strc']:'#eaa21a');

		$ava_get = ava_get($id);
		$ava_get = ($ava_get?$ava_get:'' );


		$code .= '<div id="el4572" class="elem_wrap parent stati stats" style="margin-bottom:15px;">
			<div class="user_holder">
				<div class="ava neros nerol" '.($ava_get?'style="background-image:url('.$user['ava'].');':'').'">'.
						(!$ava_get?get_text_ava($user['name']):'')
						.'</div>
				<h1 class="account_name">'.$namecode.'</h1>
			</div>
			<div class="wrap_stat">	
				<div class="stat_hold lifer ">
					<div class="stat_hold_inn neros nerol">
						<div class="stat_txt">Жизни</div>
						<div class="stat_num">';
					$code .= '<div class="hearts" style="'.($user['life']>=1?'':'opacity: 0.3;filter: grayscale(100%);').';background-image:url('.$hrt.');"></div>';
					$code .= '<div class="hearts" style="'.($user['life']>=2?'':'opacity: 0.3;filter: grayscale(100%);').';background-image:url('.$hrt.');"></div>';
					$code .= '<div class="hearts" style="'.($user['life']>=3?'':'opacity: 0.3;filter: grayscale(100%);').';background-image:url('.$hrt.');"></div>';
			$code .= '	</div>
					</div>
				</div>
				<div class="stat_hold starser ">
					<div class="stat_hold_inn neros nerol">
						<div class="stat_txt">'.$strt.'</div>
						<div class="stat_num"><div class="stars" style="background-image:url('.$str.');color:'.$strc.';"></div>
							<div class="i" style="color:'.$strc.';"><span class="gold" style="color:'.$strc.';">'.($user['b']>$global_sets['max']?$global_sets['max']:$user['b']).'</span><span style="    font-size: 20px;opacity: 0.5;color:'.$strc.';">/'.$global_sets['max'].'</span></div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>';
			$nbg = (isset($global_sets['nbg'])?$global_sets['nbg']:'#111111');
			$nc = (isset($global_sets['nc'])?$global_sets['nc']:'#ffffff');

		$code .=' '.($pagepub!=100?'<div class="artlabel" style="background-color:'.$nbg.';color:'.$nc.';">'.$global_sets['n'.$pagepub].'</div>':'').'
			<h3 class="art_title" '.($pagepub==100?'style="text-align: center;font-size: 50px;padding-top: 40px !important;font-weight: 800;margin: 0 auto;margin-bottom: 10px !important;"':'').'>'.($pagepub==100?'Призы<br>марафона':$global_sets['tt'.$pagepub]).'</h3>
			'.($pagepub==100?'<div style="text-align: center;max-width: 300px;line-height: 1;margin: 0 auto 30px;">На этой странице можно потратить ваши бонусы</div>':'').'
		</div>';
	}if($type=='video'&&$pagepub!=100){ 
		$code .= '<div id="el4572" class="elem_wrap parent video" style="margin-bottom:35px;">';
		if(isset($user['l'.$pagepub])&&$user['l'.$pagepub]&&time()<$user['l'.$pagepub] ){
			$code .= '<div class="video_grand_wrapper"><div class="wrap_shadow"><div class="hol"><iframe src="https://www.youtube.com/embed/'.(isset($global_sets['v'.$pagepub])?$global_sets['v'.$pagepub]:'NlOX1MXZSfY').'?rel=0&showinfo=0&color=white" frameborder="0" allowfullscreen=""></iframe></div></div></div>';
		} else {
			$code .= '<div class="widecont"><div class="relative empty_area" style="
    padding-top: 50%;border-radius: 6px 6px 0 0;
"><div style="
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 100%;
    color: #1111114f;
"><div class="th_out">
<div class="th_in"><i class="fa fa-play" style="
    background: #00000021;
        color: '.(isset($global_sets['bgc'])?$global_sets['bgc']:'#ffffff').';
    height: 50px;
    width: 50px;
    border-radius: 100%;
    font-size: 25px;
    line-height: 52px;
    display: block;
    margin: 0 auto;
    position: relative;
    padding: 0 0 0 4px;
"></i> Видео недоступно
</div>
</div></div></div></div>';
		}
		$timer_id = ($pagepub==$sellday?'timer':'l'.$pagepub);
		if(isset($user[$timer_id])&&$user[$timer_id] ){
			$timer = $user[$timer_id]-time();
			$zero = ($user[$timer_id]<time()||!$timer?1:0);
			$timer = ($zero?3:$timer);
			$code .= '<style>.video .wrap_shadow:after {display:none;}</style>
			<div class="wrap_shadow mycount">
								<div class="video_count_holder" style="border: 1px solid rgba(0,0,0,0.1);box-shadow: 0 3px 10px rgb(0 0 0 / 10%);">
								<div class="video_count_holder_warn" style="text-align: center;margin-bottom: 0px;position: relative;top: 10px;font-weight: 600;"><i class="fa fa-exclamation-triangle"></i> Видео закроется через:</div>';
				$code .= '<div></div> 
				<div class="countdown '.($zero?'zero':'').' d s2 top" data-type="d">
					<div class="clock" '.($timer?'data-timer="'.$timer.'"':'').' style=""></div>
					<div class="clearfix"></div> 
				</div>
				<div class="clearfix"></div>
				<div></div>';
			$code .= '<div></div>
								</div>
							</div>';
		}
		$code .= '</div>';
		

	}
	return $code;
}

$body = '';
if($user['day']>=$pagepub||$pagepub==100){
	foreach ($pageconstructor as $key12 => $value12) {
		$body .= all_elems($id,$value12,$pagepub,$user);
	}
} else {
		$body .= '<h4 style="text-align: center;">Этот урок пока не доступен :(</h4>';
	}

$markup = str_replace('{{body}}', ($comon?$comon:$body), $markup);
echo $markup;





?>





