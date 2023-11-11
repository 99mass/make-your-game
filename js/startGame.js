const currentTime=0;

function startGame() {
    
    btnStart.addEventListener('click', () => {
        
        if (!isPaused && !isStart && !isRestart && initialise   || !isStart && !isPaused && isRestart && initialise ) {           
            isStart=true;
            isDead=false;
            isTimeRune=true ;            
            btnNextClicked=false; 
            btnPause.style.display='block';
            btnStart.style.display='none';        
            if (!isReset) {                
                times(currentTime);        
            }
            req = requestAnimationFrame(gameloop);
            
        }
    });
    
    // Gestion de la touche Space
    let isSapePressed = false;
    document.addEventListener('keydown', (event) => {     
       
        if ( 
            (event.key === " "|| event.key === "Spacebar" ||event.key === "Space") &&           
            initialise && !isPaused &&  !isRestart && !isStart || 
            !isStart && initialise && isRestart && initialise
        ) {
            isStart=true;
            isDead=false;
            isTimeRune=true ;  
            btnNextClicked=false;    
            btnPause.style.display='block';
            btnStart.style.display='none';
            if (!isReset) {                
                times(currentTime);        
            }
            req = requestAnimationFrame(gameloop);
            isSapePressed = true;
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          isSapePressed = false;
        }
    });
}