//游戏数据
var board = new Array();
var score = 0;
var hasConflicted = new Array();

$(document).ready(function() {
    newGame();
});

function newGame() {
    //初始化棋盘格
    init();

    //随机在两个格子里生成2/4
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {

            var gridCell = $('#grid-cell-' + i + '-' + j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i, j));
        }
    }
    //每个格子初始化,并且每个格子都没有得到碰撞
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j < 4; j++)
            board[i][j] = 0;
            hasConflicted[i][j] = false;
    }

    updateBoardView();
    updateScore(0);
    
}

function updateBoardView() {

    $(".number-cell").remove();
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            //易错点!!学习
            $("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>'); 
            var theNumberCell = $('#number-cell-' + i + '-' + j);


            if (board[i][j] == 0) {
                theNumberCell.css('width', '0px');
                theNumberCell.css('height', '0px');
                theNumberCell.css('top', getPosTop(i, j) + 50);
                theNumberCell.css('left', getPosLeft(i, j) + 50);
                theNumberCell.css('font-size',"15px" );
            } else {

                theNumberCell.css('width', '100px');
                theNumberCell.css('height', '100px');
                theNumberCell.css('top', getPosTop(i, j));
                theNumberCell.css('left', getPosLeft(i, j));

                theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color', getNumberColor(board[i][j]));
                theNumberCell.text( getNumberText(board[i][j]) ); //后续改为自己定义的文字函数
                theNumberCell.css('font-size', "15px");
            }

            hasConflicted[i][j] = false;
        }
}

function generateOneNumber() {
    if (nospace(board))
        return false;

    //随机一个位置
    var randx = Math.floor(Math.random() * 4);
    var randy = Math.floor(Math.random() * 4);
    while (true) {
        if (board[randx][randy] == 0)
            break;
        randx = Math.floor(Math.random() * 4);
        randy = Math.floor(Math.random() * 4);
    }

    //随机一个数字
    var randNumber = Math.random() < 0.5 ? 2 : 4;


    //在此位置显示数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);

    return true;
}

$(document).keydown( function( event ) {

	switch( event.keyCode ){  //keyCode不是keyDown!!!
	case 37: //left
		if(moveLeft()){
			generateOneNumber();
			setTimeout('isgameOver()', 500);
		}
		break;
	case 38: //up
		if(moveUp()){
			generateOneNumber();
			setTimeout('isgameOver()', 500);
		}
		break;
	case 39: //right
		if(moveRight()){
			generateOneNumber();
			setTimeout('isgameOver()', 500);
		}
		break;
	case 40: //down
		if(moveDown()){
			generateOneNumber();
			setTimeout('isgameOver()', 500);
		}
		break;
	default:  //others
		break;
    }
});

function isgameOver(){
    if(nospace(board) && noMove( board ) ){
        gameOver();
    }
}



function noMove( board ){
    if(canMoveLeft(board) || canMoveRight( board ) || canMoveUp( board ) || canMoveDown( board ) )
        return false;
    return true;
}

function moveLeft(){
    if( !canMoveLeft(board) )
        return false;
    
    //move left
    for( var i = 0; i < 4; i++ )
        
        for( var j = 1; j < 4; j++ ){
            if(board[i][j] != 0){

                for( var k = 0; k < j; k++ ){
                    if( board[i][k] == 0 && noBlockHorizontal( i, k, j, board) ){
                        //move
                        showMoveAnimation( i , j , i , k );
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue ;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k] ){
                        //move
                        showMoveAnimation( i , j , i , k );
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);

                        hasConflicted[i][k] = true;
                        continue ;
                    }
                }
            }
        }

    setTimeout("updateBoardView()", 300);
    return true;
}

function moveUp(){
    if( !canMoveUp( board ) )
        return false;
    //moveUp
    for ( var j = 0; j < 4; j++ )
        for( var i = 1; i < 4; i++ ){
            if(board[i][j] != 0){
                
                for( var k = 0; k < i; k++ ){
                    if( board[k][j] == 0 && noBlockVertical(j, k, i, board) ){ //noBlockVertical()参数注意
                        //moveUp
                        showMoveAnimation( i, j, k, j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        
                        continue;
                    }
                    //碰撞
                     else if( board[k][j] == board[i][j] && noBlockVertical(j, k, i, board) && hasConflicted[k][j]==false ){
                        //moveUp
                        showMoveAnimation(i, j, k, j ); //移动的过程中是原来的数字，没有变
                        //add
                        board[k][j] += board[i][j];  //移动完成后才改变移动到目的地的数字
                        board[i][j] = 0;   //远点数字也是
                        score += board[k][j];
                        updateScore(score);

                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    setTimeout('updateBoardView()', 300); //理解updateBoardView()函数
    return true;
}

function moveRight(){
    if( !canMoveRight( board ) )
        return false;
    //moveRight
    for( var i = 0; i < 4; i++ ){
        for( var j = 2; j >= 0; j-- ){
           if(board[i][j] != 0 ){
                for( var k = 3; k > j; k-- ){
                    if( board[i][k] == 0 && noBlockHorizontal( i, j, k, board ) ){
                        //moveRight
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[i][k] == board[i][j] && noBlockHorizontal( i, j, k, board) && !hasConflicted[i][k]){
                        //moveRight
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout('updateBoardView()', 300);
    return true;
}

function moveDown(){
    if( !canMoveDown( board ) )
        return false;
    //moveDown
    for( var j = 0; j < 4; j++ ){
        for( var i = 2; i >= 0 ; i-- ){
            if( board[i][j] != 0){
                for( var k = 3; k > i; k-- ){
                    if( board[k][j] == 0 && noBlockVertical(j, i, k, board ) ){
                        //moveDown
                        showMoveAnimation(i, j , k, j );
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if( board[k][j] == board[i][j] && noBlockVertical(j , i, k, board ) && hasConflicted[k][j] == false){
                        //move
                        showMoveAnimation(i, j, k, j );
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }

            }
        }
    }
    setTimeout("updateBoardView()", 300);
    return true;
}

function gameOver(){
   var k = confirm("Again?  or Close? ");
   if(k)
    newGame();
    else   
    $(document).close();
}