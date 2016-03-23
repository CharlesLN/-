$(document).ready(function(){
	// 点击预览，提交已有信息，生成活动详情的预览
	$(".proHeaderView").click(function(){
		// 获取除备注和特殊要求以外的input和textarea
		var $form = $("input,textarea:not(:gt(1))");
		console.log($form);
		// 设置标志量
		var $flag = 0;
		// 遍历所有取得的input和textarea
		$form.each(function(index){
			// 若input或textarea中值为空则令标志量为1，表示有未完成项
			if($(this).val() == 0){
				$flag = 1;
			}			
		});
		// 如果有未完成项则显示提示信息，1.5s后消失
		if($flag == 1){
			$(".proTip").show();
			setTimeout(function(){
				$(".proTip").hide();
			},1500);
		}
		else{
			// 提交
		}
	});

	// 显示隐藏选项列表
	function showAndhide(arg){
		$(arg).find("input").focus(function(){
			$(arg+"Ul").slideDown(300);
			$(arg+"Ul").css("overflow","auto");
		}).blur(function(){
			$(arg+"Ul").slideUp(300);
		})
	}
	showAndhide(".proInfoStart");
	showAndhide(".proInfoScale");
	showAndhide("#proInfoClassify");

	// 点击li为input填充字
	function addText(arg){
		// 取得ul下的所有li
		var $list = $(arg).find("li");
		$list.each(function(index){
			// 给每个li绑定点击时间
			$(this).click(function(){
				// 获取li中文字
				var $text = $(this).text();
				// 将li中文字填入input中
				$(this).parents(arg).find("input").val($text);
				// 隐藏选项列表
				$(arg+"Ul").slideUp(300);
			})
		});
	}
	addText(".proInfoStart");
	addText(".proInfoScale");
	addText("#proInfoClassify");

	// 焦点处于可输入文本框内时，隐藏底部导航，避免遮挡和定位错误
	function fixFootNav(arg){
		var $input = $(arg).find("input");
		$input.focus(function(){
			$("#footer").hide();
		}).blur(function(){
			$("#footer").show();
		});
		var $textarea = $(arg).find("textarea");
		$textarea.each(function(index){
			$(this).focus(function(){
				$("#footer").hide();
			}).blur(function(){
				$("#footer").show();
			});
		});
	}
	fixFootNav(".proInfoName");
	fixFootNav(".proInfoLocation");
	fixFootNav(".proDetails");


	// 为查看特殊情况的字绑定click
	$("#special").click(function(){
		if($("#info").css("display") == "none"){
			$("#info").slideDown(300);
		}
		else{
			$("#info").slideUp(300);
		}
	});

	// 图片宽高相等
	// 获取img标签
	var $img = $(".proPic").find("img");
	// 遍历img
	$img.each(function(index){
		// 令img高度等于当前宽度
		var $height = $(this).width();
		$(this).css("height",$height);
	});

	// 点击叉号移除
	var $pic = $(".proPic");
	$pic.find("span").click(function(){
		$(this).parent().remove();
	});
});

var result1=document.getElementById("result");
var file=document.getElementById("file");
//判断浏览器是否支持FileReader接口
if(typeof FileReader == 'undefined'){
    result1.InnerHTML="<p>你的浏览器不支持FileReader接口！</p>";
    //使选择控件不可操作
    file.setAttribute("disabled","disabled");
}

function readAsDataURL(){
    //检验是否为图像文件
    var file = document.getElementById("file").files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("看清楚，这个需要图片！");
        return false;
    }
    var reader = new FileReader();
    //将文件以Data URL形式读入页面
    reader.readAsDataURL(file);
    console.log();
    reader.onload=function(e){
        var result1=document.getElementById("result");
        //显示文件
        result1.innerHTML='<img src="' + this.result +'" alt="" />';
        
    }
}