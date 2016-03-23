$(document).ready(function(){
	var $unsigned = $(".unsigned-peo");
	var $unsignedNum = $unsigned.find("li").length;
	var $signed = $(".signed-peo");
	var $signedNum = parseInt($("#signedNum").text());
	var $notsignedNum = parseInt($("#unsignedNum").text());
	var $countSigned = $(".count_signed");	
	var $countUnsigned = $(".count_not_sign");
	// console.log($unsignedNum);
	// 未签到人名动态绑定点击事件
	$unsigned.on("click","li",function(){
		// 移出当前节点
		$(this).remove(); 
		// 取当前人名并添加li至已签到部分
		$signed.append("<li>"+$(this).text()+"</li>");
		// 下边框参数-1
		$unsignedNum = $unsignedNum - 1;
		// 变更边框表示
		border();
		// 已签到人数加一，未签到人数减一
		$signedNum++;
		$countSigned.text($signedNum);
		$notsignedNum--;
		$countUnsigned.text($unsignedNum);
	});
	// 已签到人名动态绑定点击事件
	$signed.on("click","li",function(){
		$(this).remove();
		$unsigned.append("<li>"+$(this).text()+"</li>");
		// 下边框参数+1
		$unsignedNum = $unsignedNum + 1;
		// 变更边框表示
		switch($unsignedNum % 4){
			case 3:
				$unsigned.find("li:eq(-5)").css("borderBottom","0");
				break;
			case 2:
				$unsigned.find("li:eq(-5)").css("borderBottom","0");
				break;
			case 1:
				$unsigned.find("li:eq(-2),:eq(-3),:eq(-4)").css("borderBottom","1px solid #EFEEEC");
				break;
			case 0:
				$unsigned.find("li:eq(-5)").css("borderBottom","0");
				break;
		}
		// 已签到人数减一，未签到人数加一
		$signedNum--;
		$countSigned.text($signedNum);
		$notsignedNum++;
		$countUnsigned.text($unsignedNum);
	});
	// 解决下边框的问题
	// 对li的个数取余作为条件
	function border(){
		switch($unsignedNum % 4){
		// 如果余数为3,则倒数第四个需添加下边框
		case 3:
			$unsigned.find("li:eq(-4)").css("borderBottom","1px solid #EFEEEC");
			break;
		// 如果余数为2,则倒数第三、四个需添加下边框
		case 2:
			$unsigned.find("li:eq(-3),:eq(-4)").css("borderBottom","1px solid #EFEEEC");
			break;
		// 如果余数为1,则倒数第二、三、四个需添加下边框
		case 1:
			$unsigned.find("li:eq(-2),:eq(-3),:eq(-4)").css("borderBottom","1px solid #EFEEEC");
			break;
		case 0:
			$unsigned.find("li:eq(-2),:eq(-3),:eq(-4)").css("borderBottom","0");
			break;
		}
	}
	border();	
});