$(document).ready(function(){
	// 日志跳转
	$(".pDataBlog img").click(function(){
		window.location.href = "##";
	});
	// 个人介绍跳转
	$(".pDataContent").click(function(){
		alert(1);
	});

	// 修改标签
	var $pDataTips = $(".pDataTips li");
	$pDataTips.each(function(index){
		// 载入时checked=true时颜色为绿色
		if($(this).find("input").is(":checked")){
			$(this).find("label").css("color","#5cb85c");
			$(this).css("border","1px solid #5cb85c");
		}
		$(this).click(function(){
			// 固定选择明星颜值并放在最中间
			if($(this).find("label").text() == "明星颜值"){
				$(this).find("label").css("color","#5cb85c");
				$(this).css("border","1px solid #5cb85c");
				$(this).find("input").prop("checked",true);
			}
			else{
				// 若复选框是选中的则变成灰色样式且将复选框改为未选中
				if($(this).find("input").is(":checked")){
					$(this).find("label").css("color","#999");
					$(this).css("border","1px solid #999");
					$(this).find("input").prop("checked",false);
				}
				else{
					$(this).find("label").css("color","#5cb85c");
					$(this).css("border","1px solid #5cb85c");
					$(this).find("input").prop("checked",true);
				}
			}			
		});		
	});
	// 确定按钮	
	$(".pDataButton").click(function(){
		// 计数器初始为0
		var num = 0;
		// 遍历所有标签得到共有多少被选中
		$pDataTips.each(function(index){
			if($(this).find("input").is(":checked")){
				num++;
			}
		});
		// 只能选八个，选不够或选多了提醒  
		if(num != 9){
			// 显示提示信息
			$(".pDataToast").show(500);
			// 提示信息两秒后消失
			setTimeout(function(){
				$(".pDataToast").hide(500);
			},2000);
		}
		else{
			// 提交并刷新页面
		}
	});
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
