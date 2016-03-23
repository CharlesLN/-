$(document).ready(function(){
	// 日志跳转
	$(".pDataBlog img").click(function(){
		window.location.href = "##";
	});
	// 个人介绍跳转
	$(".pDataContent").click(function(){
		alert(1);
	});

	// 点赞功能
	// 获取列表项
	var  $pDataTab = $(".pDataTab li");
	// 遍历列表项绑定click
	$pDataTab.each(function(index){
		$(this).click(function(){
			var $color = $(this).find("span").css("color");
			// 将字符串24转换为整数
			var $number = parseInt($(this).find("span").text());
			// 颜色为灰色时改变span颜色数字加一
			if($color == "rgb(153, 153, 153)"){
				$(this).find("span").css("color","#5cb85c");
				$number++;
				$(this).find("span").text($number);
			}
			else{
				$(this).find("span").css("color","rgb(153, 153, 153)");
				$number--;
				$(this).find("span").text($number);
			}
		})
	})
	// swiper bug
	// 防止小屏幕错位
	$(".swiper-slide").css("minHeight","200px");
	// 根据浏览器当前窗口可视区域高度计算滑动区域高度
	var $height = $(window).height() - 260 - 50; 
	$(".swiper-slide").css("height",$height/2);
	$(".swiper-no-swiping").css("height","auto");
	
	// swiper插件调用
	var mySwiper1 = new Swiper('.pDataBlogPic', {
		//可选选项，自动滑动
		autoplay: 2000,
		// 淡入淡出效果
		effect : 'fade',
		// 无限循环
		loop:true,
	});
	var mySwiper2 = new Swiper('.pDataMain', {
		// 垂直方向滑动
		direction : 'vertical',
		// 上一页
		prevButton:'.pDataExplainDown',
		// 下一页
		nextButton:'.pDataNext',
	});
});