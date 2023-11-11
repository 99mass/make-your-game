function pauseGame() {

    btnPause.addEventListener('click', () => {
        
        if (!isPaused && isStart) {       
               
            isPaused=true;
            btnContinue.style.display='block';
            btnPause.style.display='none';
            btnStart.style.display='none';     
        }
    });

    btnContinue.addEventListener('click', () => {
        
        if (isPaused && isStart) {   
                   
            isPaused=false;
            req=requestAnimationFrame(gameloop);
            btnContinue.style.display='none';
            btnPause.style.display='block';    
        }
    });

    document.addEventListener('keydown', (event) => {     
        
        if ( event.key ==="Shift" && isStart && !isPaused)
         {
           
            isPaused=true;
            btnContinue.style.display='block';
            btnPause.style.display='none';
            btnStart.style.display='none';
            
        }else if (event.key ==="Shift" && isStart && isPaused)
         {
           
            isPaused=false;
            req=requestAnimationFrame(gameloop);
            btnContinue.style.display='none';
            btnPause.style.display='block';
        }
    });
}