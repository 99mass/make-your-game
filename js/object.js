let rectBlock=block_console.getBoundingClientRect();
let rectPlayer=player.getBoundingClientRect();
let rectBall = MyBall.getBoundingClientRect();

let _speedX=3.5;
let _speedY=-6;


var blockConsoles = {
    x: rectBlock.x,
    y: rectBlock.y,
    speedX: 2,
    speedY: 2,
    height: rectBlock.height,
    width: rectBlock.width,
}

 

var  players = {
    x: (rectBlock.width/2)-(rectPlayer.width/2),
    y: rectPlayer.y,
    speed: 10,
    height: rectPlayer.height,
    width: rectPlayer.width,
}

var myBallObj ={
    x : (rectBlock.width/2) - (rectBall.width/2),
    y: rectBlock.height-rectBall.height-rectPlayer.height-18,
    ballSpeedX: _speedX,
    ballSpeedY: _speedY,
    width:rectBall.width,
    height:rectBall.height

}

const myBallObjX=(block_console.clientWidth/2)- (myBallObj.width/2)
const myBallObjY=block_console.clientHeight-myBallObj.height-rectPlayer.height-18 ;
const playersX=(block_console.clientWidth/2)-(rectPlayer.width/2);