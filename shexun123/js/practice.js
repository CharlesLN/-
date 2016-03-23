$(document).ready(function(){
	// 图片正方形
	var $img = $(".prac-show-img img");
	var $plus = $(".prac-show-img-plus");
	$img.css("height",$img.css("width"));
	$plus.css("height",$img.css("width"));
	$(".img-uploader").css("height",$img.css("width"));

	// 修改我的项目提示文字
	$(".prac-project-title-2").click(function(){
		$(".toast").show();
		setTimeout(
	        function hide_toast(){
	           $(".toast").hide();
	        },2000);
	});

	// 类型下拉菜单
	// 单击显示隐藏下拉菜单
	var $input = $("#prac-input input");
	var $ul = $("#prac-input-ul");
	var $li = $("#prac-input-ul li");
	$("#prac-input").click(function(){
		if($ul.is(":visible")){
			$ul.hide();
		}
		else{
			$ul.show();
		}
	});
	// 点击列表项并将文字填入input
	$li.each(function(index){
		$(this).click(function(){
			$ul.hide();
			$input.val($(this).text());
		});
	});

	// 项目管理点击事件
	var $job = $(".prac-manage-job");
	var $vip = $(".prac-manage-vip");
	$job.click(function(){
		// console.log(1);
	});
	$vip.click(function(){
		// console.log(2);
	});

	// 底部导航有焦点时隐藏
	var $footer = $("#footer");
	$("input,textarea").each(function(index){
		$(this).focus(function(){
			$footer.hide();
		}).blur(function(){
			$footer.show();
		});
	});
	$(".img-uploader").focus(function(){
		$footer.show();
	}).blur(function(){
		$footer.show();
	});
	$(".prac-inspire-line input").focus(function(){
		$footer.show();
	}).blur(function(){
		$footer.show();
	});
});