// 避免输入法把底部导航顶上去
$('#text_area').bind('focus',function(){  
        $('.footer').css('display','none');  
    }).bind('blur',function(){  
        $('.footer').css('display','block');   
    }); 

// 成功提示框
function after_send(){
    var the_toast = document.getElementById('toast')
    the_toast.style.display = "block";
    setTimeout(
        function hide_toast(){
            var the_toast = document.getElementById('toast')
            the_toast.style.display = "none";
            location.href = "send_and_history2.html";
        },2000);
}
var leaveSend = document.getElementById('leaveSend');
leaveSend.onclick = function(){
	after_send();
}