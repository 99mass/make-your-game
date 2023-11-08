let isPaused = false;
let isStart = false;
let isTimeRune=false;
let timeFinish=false;
let isRestart=false;
let initialise=true
let isBallMove=false;
let lev=0;
let stopMovingPlayer=false;
let statusSong=false;



window.onload=()=>{
    // place ball and player in the middle consol
    initialiseElementDOM();
localStorage.clear()
    // create bricks
    createBricks(96);

    // start the timer
    startTime();
    
    // start game commade withe the touche Enter or start button
    startGame();
    
    //restart the game 
    restartgame();
    // pause the game
    pauseGame();
    

 };


 function gameloop(){     
    if (isStart && !isPaused && !isDead  && !isRestart ) {
      
       mouveBall();   
       if (!stopMovingPlayer) {
         movePlayer();
       }      
       req=requestAnimationFrame(gameloop);
       
    }
    
}


