// 选择性别
var male = document.getElementById('male');
var female = document.getElementById('female');
var maleCheck = document.getElementById('maleRadio');
var femaleCheck = document.getElementById('femaleRadio');
male.onclick = function(){
	male.style.color = "#478BC8";
	female.style.color = "#a3a3a3";
	femaleCheck.checked = false;
}
female.onclick = function(){
	male.style.color = "#a3a3a3";
	female.style.color = "#EB6877";
	maleCheck.checked = false;
}
var iknow = document.getElementById('iknow');
iknow.onclick = function(){
	toast.style.display = "none";
	window.location.href = "http://mail.qq.com";
}
// 查看密码
var eye = document.getElementById('eye');
var passwordInput = document.getElementById('passwordInput');
touch.on(eye, 'touchstart', function(ev){
    passwordInput.setAttribute('type','text');
});
touch.on(eye, 'touchmove', function(ev){
    passwordInput.setAttribute('type','text');
});
touch.on(eye, 'touchend', function(ev){
    passwordInput.setAttribute('type','password');
});
// 选择学校
// 后台传入json 
		var json = {
				"school" : [{
					"name" : "西安电子科技大学"
				},{
					"name" : "西安外国语大学"
				},{
					"name" : "陕西师范大学"
				}]
		};
		// var json = {
		// 		"school" : []
		// };
		var json1 = {
				"school" : [{
					"name" : "陕西科技大学"
				},{
					"name" : "西安邮电大学"
				}]
		};
$(function(){
	// 默认选中性别女
	$('#female').trigger('click');
	// console.log($('#femaleRadio').prop("checked"));
	// 选择学校
	var $option = $('.option');
	$('#search').focus(function(){
		$option.slideDown(300);
	}).blur(function(){
		$option.slideUp(300);
	});
	// 将选择的学校填入文本框
	$('.option label').click(function(){
		$('#search').val($(this).text());
		$option.hide();
	})
	// 动态监听文本框内容,ajax更新内容
	$("#search").bind({
		input:function(){
			// 如果文本框内有值
			if($("#search").val()){
				// ajax更新学校显示
				// 回调函数
				function callback1(){
					// 移除ul中本来的标签
					$(".option ul li,.option ul hr").remove();
					// 若只有一个不需要hr标签
					// 如果后台没有查询到值则提示没有此学校需完善
					if(json.school.length == 0){
						$('.option ul').find('.tip3').remove();
						$('.option ul').append('<label class = "tip3">没有你查找的学校呀,请直接提交，我们会尽快完善，对您造成的不便请谅解</label>');
					}
					else{
						$(".option ul").append("<li><label>" + json.school[0].name + "</label></li>");
						for(var i = 1;i<json.school.length;i++){
							$(".option ul").append("<hr><li><label>"+json.school[i].name+"</label></li>");
						}
					}
				}
				callback1();
				// 获取最新的数据
				$('.option label').click(function(){
					$('#search').val($(this).text());
					$option.hide();
				})
			}
			else{
				$(this).parent().find('.tip').remove();
				// 如果文本框内值为空，则恢复默认显示
				// 回调函数
				function callback2(){
					$(".option ul li,.option ul hr").remove();
					$(".option ul").append("<li><label>" + json1.school[0].name + "</label></li>");
					for(var i = 1;i<json1.school.length;i++){
						$(".option ul").append("<hr><li><label>"+json1.school[i].name+"</label></li>");
					}
				}
				callback2();
				// 获取最新的数据
				$('.option label').click(function(){
					$('#search').val($(this).text());
					$option.hide();
				})
			}
		}	
	})

	// 表单验证
	// 名字验证，字符长度需大于等于1
	$('#name').blur(function(){
		if($(this).val().length <= 1){
			// 移出下一个兄弟节点
			$(this).next().remove();
			$(this).parent().append('<label class = "tip">名字好像应该长一点吧</label>');
		}
		else{
			$(this).next().remove();
		}
	})
	// 手机号验证
	$('#phone').blur(function(){
		if($(this).val().length != 11){
			$(this).next().remove();
			$(this).parent().append('<label class = "tip">手机号好像不对呀</label>');
		}
		else{
			$(this).next().remove();
		}
	})
	// QQ邮箱验证
	$('#mailInput').blur(function(){
		if(!$(this).val().match(/^\d{9}$|^\d{10}$/)){
			$(this).next().next().remove();
			$(this).parent().append('<label class = "tip">要输入QQ号哦</label>');
		}
		else{
			$(this).next().next().remove();
		}
	})
	// 密码验证，大于6位即可
	$('#passwordInput').blur(function(){
		if($(this).val().length < 6){
			$(this).next().next().remove();
			$(this).parent().append('<label class = "tip">密码太短可不好呀</label>');
		}
		else{
			$(this).next().next().remove();
		}
	})
	// 验证码
	$('.get').click(function(){
		$(this).prop("disabled",false);
		// console.log($(this).prop("disabled"));
		time($(this));
	})

	$('#identifyCode').blur(function(){
		if(!($('#identifyCode').val() == $('#identifyCodeHide').val())){
			$(this).parent().find('.tip').remove();
			$(this).parent().append('<label class = "tip">验证码好像不对哦</label>');
		}
		else{
			$(this).parent().find('.tip').remove();
		}
	})
	// 验证码倒计时
	var wait = 30;
    function time(t) {
        if (t.html() == '0s') {
            t.prop("disabled", false);
            t.html("获取");
            wait = 30;
        } else {
            t.prop("disabled", true);
            t.html(wait + 's');
            wait--;
            setTimeout(function() {
                time(t)
            },
            1000)
        }
    }
    // 点击注册时整体验证
    $('#registerButton').click(function(){
    	$('input').trigger('blur');
    	if($('.tip').length == 0 && $('#search').val()){
    		$('#toast').show();
    		$(this).submit();
    	}
    	else{
    		$(this).parent().find('.tip2').remove();
    		$(this).parent().append('<label class = "tip2">把信息完善了才能注册哦</label>');
    		setTimeout(function(){
    			$('#registerButton').parent().find('.tip2').remove();
    		},1000);
    	}
    })
})

// 学校不存在的情况