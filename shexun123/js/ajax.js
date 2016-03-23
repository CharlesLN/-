
function CreateXmlRequest(){
	  var xmlHttp=false;
	  if(window.XMLHttpRequest){
	   xmlHttp=new XMLHttpRequest();
	  }else if(window.ActiveXObject){
	   try{
	    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	   }catch(e1){
	    try {
	     xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	    } catch (failed) {
	     xmlHttp=false;
	    }
	    
	   }
	  }
	  return xmlHttp;
	 }
//
function getJsonObject(actionname,postdata,dataHandlefunc) 
{
	//alert(postdata);
	var xmlRequest=CreateXmlRequest();
	if(!xmlRequest)
	{
		 document.getElementById("msg").innerHTML="当前浏览器不支持";
	}
	else
	{
		xmlRequest.open("POST", actionname, true);   
        //定义传输的文件HTTP头信息  
		xmlRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"); 
		xmlRequest.onreadystatechange = function()
		{   //获取执行状态  
			//如果执行状态成功，那么就把返回信息写到指定的层里  
			if (xmlRequest.readyState == 4)
			{  
				if(xmlRequest.status == 200)
				{
					var json = eval('('+  xmlRequest.responseText +')' );
					dataHandlefunc(json);
				}
			}
		}
		xmlRequest.send(postdata);//发送POST数据  
	}
}
//取出数据为空转换
function getNullString(string){
	if(string==undefined){
		return "";
	}
	else 
		return string;
} 
//去左空格;
function ltrim(s){
return s.replace( /^\s*/, "");
}
//去右空格;
function rtrim(s){
return s.replace( /\s*$/, "");
}
//左右空格;
function trim(s){
return rtrim(ltrim(s));
}

//上传图片
function ajaxFileUpload(url,showImgfunc)
{
	 $("#loading")
     .ajaxStart(function(){
         $(this).show();
     })//开始上传文件时显示一个图片
     .ajaxComplete(function(){
         $(this).hide();
     });//文件上传完成将图片隐藏起来
    $.ajaxFileUpload
    (
        {
            url:url,//用于文件上传的服务器端请求地址
            secureuri:false,//一般设置为false
            fileElementId:'file',//文件上传空间的id属性  <input type="file" id="file" name="file" />
            dataType: 'json',//返回值类型 一般设置为json
            success: function (data, status)  //服务器成功响应处理函数
            {
            	showImgfunc(data);
                if(typeof(data.error) != 'undefined')
                {
                    if(data.error != '')
                    {
                        alert(data.error);
                    }else
                    {
                        alert(data.message);
                    }
                }
            },
            error: function (data, status, e)//服务器响应失败处理函数
            {
                alert(e);
            }
        }
    )
    
    return false;
}
