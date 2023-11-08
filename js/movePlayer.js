let isMovingLeft= false
let isMovingRight =false

function movePlayer() {
  
    if (isStart && isMovingLeft && players.x >0 ){
        players.x-=players.speed; 
    }

    if (isStart && isMovingRight && players.x+players.width<blockConsoles.width-10){
        players.x +=players.speed;
    }    

    if ( isStart && players.x<0) {
        players.x=0;
    }
    if (isStart && (isMovingRight ||isMovingLeft )) {        
        player.style.left=players.x+ 'px';
    }
 
}

    
    
   
document.addEventListener("keydown", (e) => {
    if (isStart) {
        if (e.key === "ArrowLeft") {
            isMovingLeft = true;
        }
        if (e.key === "ArrowRight") {
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
