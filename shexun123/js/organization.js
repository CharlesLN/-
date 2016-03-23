$(document).ready(function(){
	// 搜索框效果
	function searchFocus(){
		var topSearch = document.getElementById('orgaSearch');
		var searchInput = document.getElementById('orgaSearchInput');
		var searchLabel = document.getElementById('orgaSearchLabel');
		var searchCancel = document.getElementById('orgaSearchCancel');
		var topSearchPlus = document.getElementById('topSearchPlus');
		// 获取底部导航
		var footer = document.getElementById('footer');
		// 焦点状态
		function blur(){
			topSearch.className = "topSearch";
			searchLabel.style.display = "block";
			searchCancel.style.display = "none";
			footer.style.display = "block";
			topSearchPlus.style.display = "block";
		}
		searchInput.onfocus = function(){
			topSearch.className = "topSearchFocus";
			searchLabel.style.display = "none";
			searchCancel.style.display = "block";
			// 防止底部导航跟随输入法上移
			footer.style.display = "none";
			topSearchPlus.style.display = "none";
		}
		// 失去焦点状态
		searchInput.onblur = function(){
			// 如果有文字则不触发blur
			if(searchInput.value.length==0){
				blur();
			}
		}
		searchCancel.onclick = function(){
			if(searchInput.value.length == 0){
				blur();
			}
			else{
				// 有文字点击取消后不显示label
				topSearch.className = "topSearch";
				searchLabel.style.display = "none";
				searchCancel.style.display = "none";
				footer.style.display = "block";
				topSearchPlus.style.display = "block";
			}
		}
	}
	searchFocus();

	// 搜索框事件
	// 失焦触发
	$('#orgaSearchInput')
	.on('blur',function(){
		// alert(2);
	})
	// 回车触发
	.on('keypress',function(event){
	    if(event.keyCode == "13"){
	    	// alert(1);
	    }
	})

	// 切换社团效果
	// 点击标题滑下社团列表
	$(".orgaName").click(function(){
		if($(".orgaSwitch").css("display") == "none"){
			$(".midHr").show();
			$(".orgaNameMask").show();
			$(".orgaSwitch").show();
		}
		else{
			$(".midHr").hide();
			$(".orgaNameMask").hide();
			$(".orgaSwitch").hide();
		}
	});

	// 切换至搜索部分
	$(".orgaHeaderSearch").click(function(){
		$(".orgaContainer").hide();
		$(".orgaDiscover").show();
	});
	// swiper bug
	// 防止小屏幕错位
	$(".swiper-slide").css("minHeight","200px");
	// 根据浏览器当前窗口可视区域高度计算滑动区域高度
	var $height = $(window).height() - 260 - 50; 
	$(".swiper-slide").css("height",$height/2);
	$(".swiper-no-swiping").css("height","auto");

	// swiper插件调用
	var mySwiper1 = new Swiper('.orgaTopPic', {
		//可选选项，自动滑动
		autoplay: 2000,
		// 淡入淡出效果
		effect : 'fade',
		// 无限循环
		loop:true,
	});
	var mySwiper2 = new Swiper('.orgaMain', {
		// 垂直方向滑动
		direction : 'vertical',
		// 上一页
		prevButton:'.orgaPrev',
		// 下一页
		nextButton:'.orgaNext',
        // mousewheelControl: true,
        // freeMode: true,
	});
})