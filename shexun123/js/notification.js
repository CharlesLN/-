// 隐藏显示已确认
$(function(){
	$('#confirmed').click(function(){
		var $confirm = $('#confirmedUl');
		if($confirm.is(":visible")){
			$confirm.hide();
			$('#confirmed').css("marginBottom","-20px");
		}
		else{
			$confirm.show();
			$('#confirmed').css("marginBottom","0");
		}
	});
	$('.applyText').focus(function(){
		$('#footer').hide();
	}).blur(function(){
		$('#footer').show();
	});
	$('.leaveButton').click(function(){
		$('#toast').show();
		setTimeout(function(){
			$('#toast').hide();
			$('#leave-reason,#fade').hide();
		},2000)
	});
	$('.notification-again').click(function(){
		$('#toast').show();
		setTimeout(function(){
			$('#toast').hide();
		},1000)
	});

	// 展开收起
	$(".notiShow").click(function(){
		if($(".notiNameHide").is(":visible")){
			$(".notiNameHide").hide();
		}
		else{
			$(".notiNameHide").show();
		}
	});

	// 图片正方形显示
	var $img = $(".notiContentImg").find("img");
	// 宽度为父级元素的20%
	var $width = $(".notiContentImg").width()/5;
	$img.each(function(){
		$(this).css("height",$width);
	});

	// 点击图片部分跳转去查看图片
	$(".notiContentImg").click(function(){
		window.location.href = "imgView.html";
	});
});
