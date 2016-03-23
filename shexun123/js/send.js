// 焦点处于文本框的时候隐藏下方导航避免随输入法移动
$('#text_input').bind('focus',function(){  
        $('.footer').css('display','none');  
    }).bind('blur',function(){  
        $('.footer').css('display','block');   
    }); 
$('#text_input1').bind('focus',function(){  
        $('.footer').css('display','none');  
    }).bind('blur',function(){  
        $('.footer').css('display','block');   
    }); 

// 通知历史跳转
$(".sendHeaderArrow").click(function(){
    location.href = "history.html";
});

// 取消跳转至history
$("#SAH_cancel").click(function(e){
    e.preventDefault();
    location.href = "history.html";
});

// 发送成功提示框
$("#SAH_send").click(function(e){
    e.preventDefault();
    toast();
});
function toast(){
    var the_toast = document.getElementById('toast')
    the_toast.style.display = "block";
    setTimeout(
        function hide_toast(){
            var the_toast = document.getElementById('toast')
            the_toast.style.display = "none";
        },1000);
}

// 选中成员后填入框中
$('#choosen').click(function(){
    var checkbox = $('#the_person :checkbox,#the_person :radio');
    var text = new Array();
    for(var i = 0;i<checkbox.length;i++){
        if(checkbox[i].checked == true){
            text[text.length] = $('#the_manager'+(i+1)+'Label').text();
        }
    }
    $('#text_input').val(text);
    $('#the_person,.fade').hide();
})
// 清空所有选择
$('.resetButton').click(function(){
    var checkbox = $('#the_person :checkbox,#the_person :radio');
    for(var i = 0;i<checkbox.length;i++){
        checkbox[i].checked = false;
    }
})

// 选择社团切换身份
// $('.dropdown-menu label').click(function(){
//     // console.log($(this).prev().val());
// })