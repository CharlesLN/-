function after_send2(){
    var the_toast = document.getElementById('toast')
    the_toast.style.display = "block";
    setTimeout(
        function hide_toast(){
            var the_toast = document.getElementById('toast')
            the_toast.style.display = "none";
            location.href = "send_and_history2.html";
        },2000);
}
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

// 点击收到变成已回复
$(".notiYes").click(function(){
	$(this).text("已回复");
	$(this).css("color","#999");
});

// 导航定位bug
$(".leaveText").focus(function(){
	console.log(1);
	$(".footer").hide();
}).blur(function(){
	$(".footer").show();
});