$(document).ready(function(){
	// 省略号的实现
	function text(arg){
		// 获取所有p前的span
		var $span = $(arg).find(".panel-body  span");
		// 遍历所有span
		$span.each(function(index){
			// 获取panel-body宽度并换算成em
			var $width = parseInt($(this).parent().width()/14);			
			// 总em减去获取到的span的em数得到最大可显示的p的em数
			var $num = $width - $(this).text().length;
			// 遍历当前span的兄弟元素中的p标签，设置宽度为$num+"em"
			$(this).siblings("p").css("width",$num + "em");
		});	
	}
	text("#get");

	// 未读标志
	// if(未读条件？){
	// 	$("#get #panel-1").css("borderLeft","2px solid #f00");
	// }

	// 切换收到发出并变换底部边框
	$(".hisHeaderGet").click(function(){
		$("#get").show();
		$("#send").hide();
		$(".hisHeaderSend").css("border","none");
		$(".hisHeaderSend").css("color","rgba(255, 255, 255, .6)");
		$(this).css("borderBottom","2px solid #ffff9d");
		$(this).css("color","#fff");
		text("#get");
	});
	$(".hisHeaderSend").click(function(){
		$("#get").hide();
		$("#send").show();
		$(".hisHeaderGet").css("border","none");
		$(".hisHeaderGet").css("color","rgba(255, 255, 255, .6)");
		$(this).css("borderBottom","2px solid #ffff9d");
		$(this).css("color","#fff");
		text("#send");
	});

	// 跳转到发送通知
	$("#hisHeaderPlus").click(function(){
		window.location.href = "send.html";
	});

	// 为panel绑定click事件
	var $panel = $(".timeline-panel");
	$panel.each(function(index){
		$(this).click(function(){
			// 社长或管理员
			window.location.href = "notification.html";
			// 社员
			// window.location.href = "notification2.html";
		});
	});
});