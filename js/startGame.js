const currentTime=0;

function startGame() {
    
    btnStart.addEventListener('click', () => {
        
        if (!isPaused && !isStart && !isRestart && initialise   || !isStart && !isPaused && isRestart && initialise ) {           
            statusSong=true
            isStart=true;
            isDead=false;
            isTimeRune=true ;
            timeFinish=false;
            btnNextClicked=false; 
            gameloop();
            btnPause.style.display='block';
            btnStart.style.display='none';        
        }
    });
    
    document.addEventListener('keydown', (event) => {     
        
        if ( 
            // (event.key === " "|| event.key === "Spacebar" ||event.key === "Space") && 
            (event.key === "s") && 
            initialise && !isPaused &&  !isRestart && !isStart || 
            !isStart && initialise && isRestart && initialise
        ) {
            isStart=true;
            isDead=false;
            isTimeRune=true ; 
            timeFinish=false;      
            btnNextClicked=false;    
            btnPause.style.display='block';
            btnStart.style.display='none';
            gameloop();
        }
    });
}