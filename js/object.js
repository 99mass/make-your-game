let rectBlock=block_console.getBoundingClientRect();
let rectPlayer=player.getBoundingClientRect();
let rectBall = MyBall.getBoundingClientRect();

let _speedX=2.5;
let _speedY=-6;
let _speed=0;

if (px768.matches) {
    _speedX=1.5;
}
if (px500.matches) {
    _speedX=2;
}

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
    speed: _speed,
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

const myBallObjX=(rectBlock.width/2) - (rectBall.width/2);
const myBallObjY=rectBlock.height-rectBall.height-rectPlayer.height-18 ;
const playersX=(rectBlock.width/2)-(rectPlayer.width/2);