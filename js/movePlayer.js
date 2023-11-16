let isMovingLeft= false
let isMovingRight =false

// deplacement la raquette
function movePlayer() {
    if (!isStart || (!isMovingRight && !isMovingLeft)) {
        return;
    }
    
    if (isMovingLeft && players.x >0 ){
        players.x-=players.speed; 
    }

    if (isMovingRight && players.x+players.width<blockConsoles.width-10 ){
        players.x +=players.speed;
    }    

    if ( players.x<0) {
        players.x=0;
    }
    if ((isMovingRight ||isMovingLeft )) {        
        player.style.left=players.x+ 'px';
    }
 
}

    

   
document.addEventListener("keydown", (e) => {
    if (isStart) {
        if (e.key === "ArrowLeft") {
            _speed=10;
            players.speed=_speed
            isMovingLeft = true;
        }
        if (e.key === "ArrowRight") {
            _speed=10;
            players.speed=_speed
            isMovingRight = true;
        }
    }
});

document.addEventListener("keyup", (e) => {
    if (isStart) {
        if (e.key === "ArrowLeft") {
            isMovingLeft = false;
        }
        if (e.key === "ArrowRight") {
            isMovingRight = false;
        }
    }
});