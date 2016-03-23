//操作UI元素的函数，和界面打交道
//显示数字动画
function showNumberWithAnimation(i, j, randNumber){

	var numberCell = $('#number-cell-' + i + "-" + j);
	numberCell.css('background-color', getNumberBackgroundColor(randNumber));
	numberCell.css('color', getNumberColor(randNumber));
	numberCell.text( getNumberText(randNumber) ); //后续变文字要改

	numberCell.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(i, j),
		left: getPosLeft(i, j)
	}, 400);
}

function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({  //animate函数的利用
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },300);
}

function updateScore(score){
	$("#score").text(score);
}