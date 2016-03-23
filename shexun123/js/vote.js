$(document).ready(function(){
	// 弹出层显示隐藏
	$(".v-header-title").click(function(){
		if($(".v-pop").is(":visible")){
			$(".v-pop").hide();
		}
		else{
			$(".v-pop").show();
		}		
	});
	// 点击弹出层选项后隐藏
	$(".v-pop li").click(function(){
		$(".v-pop").hide();
	});
	
	// 投票红心点击效果
	$("#heart").click(function(){
		if($("#heart").css("color") == "rgb(153, 153, 153)"){
			$("#heart").css("color","rgb(255, 0, 0)");
			$("#heart-check").prop("checked",true);
		}
		else{
			$("#heart").css("color","rgb(153, 153, 153)");
			$("#heart-check").prop("checked",false);
		}
		// console.log($("#heart-check").prop("checked"));	
	});

	// 点击左右箭头Ajax更新
	$(".v-left").click(function(){
		// 左箭头点击事件
	});
	$(".v-right").click(function(){
		// 右箭头点击事件
	});

	// 底部项目切换选项卡
	$("#menu").click(function(){		
		if($(".v-footer-menu").is(":visible")){
			$(".v-footer-menu").hide();
		}
		else{
			$(".v-footer-menu").show();
		}	
	});
	$(".v-footer-menu li").click(function(){
		$(".v-footer-menu").hide();
	});

	// swiper插件调用
	var mySwiper1 = new Swiper('.v-swiper', {
		//可选选项，自动滑动
		autoplay: 2000,
		// 无限循环
		loop:true,
	});
});