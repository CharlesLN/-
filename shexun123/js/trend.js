// 利用touch.js插件实现轮播图触摸操作
var target = document.getElementById("treCarousel");
target.style.webkitTransition = 'all ease 0.2s';
touch.on(target, 'swiperight', function(){
	$("#treCarousel").carousel('prev');
});
touch.on(target, 'swipeleft', function(){
	$("#treCarousel").carousel('next');
});