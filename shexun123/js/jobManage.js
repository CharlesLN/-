$(document).ready(function(){
	// 除第一个以外加上边框
	$(".jobM-request-content li:not(:first),.jobM-stock-content li:not(:first)")
	.css("borderTop","1px solid #eee");

	// 信息显示隐藏
	$(".jobM-request").click(function(){
		var $request = $(this).parent().find(".jobM-request-more");
		if($request.is(":visible")){
			$request.hide();
		}
		else{
			$request.show();
		}
	});
	$(".jobM-stock").click(function(){
		var $request = $(this).parent().find(".jobM-stock-more");
		if($request.is(":visible")){
			$request.hide();
		}
		else{
			$request.show();
		}
	});
});