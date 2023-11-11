let isStart = false;
let isPaused = false;
let isRestart=false;
let isTimeRune=false;
let timeFinish=false;
let initialise=true;
let isReset=false;
let isBallMove=false;
let stopMovingPlayer=false;
let lev=0;



window.onload=()=>{
    // place ball and player in the middle consol
    initialiseElementDOM();
localStorage.clear()
    // create bricks
    createBricks(96);
    
    // start game commade withe the touche Enter or start button
    startGame();
    
    //restart the game 
    restartgame();
    // pause the game
    pauseGame();
    

 };


 function gameloop(){     
    if (isStart && !isPaused && !isDead   ) {
      
       mouveBall();  
       if (!stopMovingPlayer) {
          movePlayer();
       } 
             
       req=requestAnimationFrame(gameloop);
       
    }
    else {
      // Game is paused, dead, stop the animation loop
      cancelAnimationFrame(req);
  }
    
}


