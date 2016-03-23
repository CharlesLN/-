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

// 搜索框ajax更新内容
var json = {
				"orgaResultName" : [{
					"name" : "cod创业协会"
				},{
					"name" : "cod创业协会"
				}],
				"orgaResultNum" : [{
					"num" : "23"
				},{
					"num" : "23"
				}],
				"orgaResultAct" : [{
					"num" : "3"
				},{
					"num" : "3"
				}],
				"orgaResultPara2" : [{
					"content" : "我们是一群致力于创新创业的有志青年"
				},{
					"content" : "我们是一群致力于创新创业的有志青年"
				}]
		};
var json1 = {
		"orgaResultName" : [{
			"name" : "cod创业协会"
		},{
			"name" : "cod创业协会"
		},{
			"name" : "cod创业协会"
		}],
		"orgaResultNum" : [{
			"num" : "23"
		},{
			"num" : "23"
		},{
			"num" : "23"
		}],
		"orgaResultAct" : [{
			"num" : "3"
		},{
			"num" : "3"
		},{
			"num" : "3"
		}],
		"orgaResultPara2" : [{
			"content" : "我们是一群致力于创新创业的有志青年"
		},{
			"content" : "我们是一群致力于创新创业的有志青年"
		},{
			"content" : "我们是一群致力于创新创业的有志青年"
		}]
};
$(function(){
	$("#orgaSearchInput").bind({
		input:function(){
			// 如果文本框内有值
			if($("#orgaSearchInput").val()){
				// ajax更新社团显示
				// 回调函数
				function callback1(){
					// 移除ul中本来的标签
					$(".orgaResult ul li,.orgaResult ul hr").remove();
					// 若只有一个不需要hr标签
					// 如果后台没有查询到值则提示没有此社团
					if(json.orgaResultName.length == 0){
						$('.orgaResult ul').find('').remove();
					}
					else{
						$(".orgaResult ul li,.orgaResult ul hr").remove();
						$(".orgaResult ul").append('<li><div class="orgaResultContent"><a class = "infoHref" href="organizationInfo.html"><img src="../img/icon2.png" class = "orgaResultImg"><span class = "orgaResultName">'+ json.orgaResultName[0].name +'</span><span class = "orgaResultNum">'+ json.orgaResultNum[0].num +'人</span><span class = "orgaResultAct">'+ json.orgaResultAct[0].num +'活动<span class = "orgaResultPara2">'+ json.orgaResultPara2[0].content +'</span></span></a></div></li>');
						for(var i = 1;i<json.orgaResultName.length;i++){
							$(".orgaResult ul").append('<hr><li><div class="orgaResultContent"><a class = "infoHref" href="organizationInfo.html"><img src="../img/icon2.png" alt="" class = "orgaResultImg"><span class = "orgaResultName">'+ json.orgaResultName[i].name +'</span><span class = "orgaResultNum">'+ json.orgaResultNum[i].num +'人</span><span class = "orgaResultAct">'+ json.orgaResultAct[i].num +'活动<span class = "orgaResultPara2">'+ json.orgaResultPara2[i].content +'</span></span></a></div></li>');
						}
					}
				}
				callback1();
			}
			else{
				// 如果文本框内值为空，则恢复默认显示
				// 回调函数
				function callback2(){
					$(".orgaResult ul li,.orgaResult ul hr").remove();
					$(".orgaResult ul").append('<li><div class="orgaResultContent"><a class = "infoHref" href="organizationInfo.html"><img src="../img/icon2.png" class = "orgaResultImg"><span class = "orgaResultName">'+ json1.orgaResultName[0].name +'</span><span class = "orgaResultNum">'+ json1.orgaResultNum[0].num +'人</span><span class = "orgaResultAct">'+ json1.orgaResultAct[0].num +'活动<span class = "orgaResultPara2">'+ json1.orgaResultPara2[0].content +'</span></span></a></div></li>');
					for(var i = 1;i<json1.orgaResultName.length;i++){
						$(".orgaResult ul").append('<hr><li><div class="orgaResultContent"><a class = "infoHref" href="organizationInfo.html"><img src="../img/icon2.png" alt="" class = "orgaResultImg"><span class = "orgaResultName">'+ json1.orgaResultName[i].name +'</span><span class = "orgaResultNum">'+ json1.orgaResultNum[i].num +'人</span><span class = "orgaResultAct">'+ json1.orgaResultAct[i].num +'活动<span class = "orgaResultPara2">'+ json1.orgaResultPara2[i].content +'</span></span></a></div></li>');
					}
				}
				callback2();
			}
		}	
	})
})