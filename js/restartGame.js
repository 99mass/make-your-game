 
function restartgame() {
 
    // Bouton Restart
    btnRestart.addEventListener("click", () => {
      if (!isRestart ) {
        isPaused = false;
        isStart = false;
        isTimeRune = false ;
        timeFinish = true; 
        isRestart = true;
        localStorage.clear()
        resetGame2();

      }
    });
  
    // Gestion de la touche Escape
    let isEscapePressed = false;
     
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !isEscapePressed ) {

        isPaused = false;
        isStart = false;
        isTimeRune = false;
        timeFinish = true;
        isRestart = true;
      
        resetGame2();
        isEscapePressed = true; 
        localStorage.clear()
      }
    });
  
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        isEscapePressed = false;
      }
    });
  }
  

  
  function resetGame2() {
    // Annule l'animation si le jeu est redémarré
    if (isRestart) {
        cancelAnimationFrame(req);
    }
    
    
    brickBreaked=0;
    allbricks=[]; 
    container.textContent="";
    lev=0;
     // create bricks
     createBricks(96);

     for (let index = 0; index < divCarteLevel.length; index++) {
        divCarteLevel[index].style.background=root["--gray"]
        imgCarteLevel[index].src="svg/speech-bubble-with-question-mark-svgrepo-com.svg";            
     }
    
    btnContinue.style.display='none';
    btnPause.style.display='none';

    // Réinitialise la position de la balle et du joueur
    myBallObj.x=myBallObjX;
    myBallObj.y=myBallObjY ;
    players.x=playersX;
    
    player.style.top = players.y+ 'px';
    player.style.left = players.x + 'px';
    MyBall.style.top = myBallObj.y + 'px';
    MyBall.style.left =myBallObj.x + 'px';
    
    // Réinitialise les éléments du jeu
    btnStart.style.display = 'block';
    comptLives = 3;
    live.textContent = comptLives;
    xp.innerHTML = 0;
    time.innerHTML = currentTime;
    levels.innerHTML=1;
    

    // relancer le jeux
    btnStart.addEventListener('click', () => {
        if (isRestart && initialise ) {         
            isStart = true;
            isTimeRune = true;
            isRestart = false;
            btnStart.style.display = 'none';
            gameloop();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (
          // (event.key === " " || event.key === "Spacebar" || event.key === "Space") && isRestart && initialise 
            event.key === "s" && isRestart && initialise 
        ) {         
            isStart = true;
            isTimeRune = true;
            isRestart = false;
            gameloop();
            btnStart.style.display = 'none';
        }
    });
}

