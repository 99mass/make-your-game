function restartgame() {
 
    // Bouton Restart
    btnRestart.addEventListener("click", () => {
      if (!isRestart ) {
        isPaused = false;
        isStart = false;
        isTimeRune = false ;         
        isRestart = true;
        initialise=true;
        isMovingLeft= false
        isMovingRight =false
        index=0; //remettre le temps a zero
        resetGame2();
        localStorage.clear();
        btnRestart.style.display='none';
      }
    });
  
    // Gestion de la touche Escape
    let isEscapePressed = false;
     
    document.addEventListener("keydown", (event) => {
     
      if (event.key === "Escape" && !isEscapePressed ) {
        btnRestart.style.display='none';
        isPaused = false;
        isStart = false;
        isTimeRune = false;        
        isRestart = true;
        initialise=true;
        isMovingLeft= false
        isMovingRight =false
        index=0; //remettre le temps a zero
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
    
    // player.style.top = players.y+ 'px';
    player.style.left = players.x + 'px';
    MyBall.style.top = myBallObj.y + 'px';
    MyBall.style.left =myBallObj.x + 'px';
    _speedY=-6;
    myBallObj.ballSpeedY=_speedY
   
    
    // Réinitialise les éléments du jeu
    btnStart.style.display = 'block';
    comptLives = 3;
    live.textContent = comptLives;
    xp.innerHTML = 0;
    time.innerHTML = currentTime;
    levels.innerHTML=1;
    

    // relancer le jeux
    btnStart.addEventListener('click', () => {
        if (isRestart ) {     
          player.style.left = players.x + 'px';
            isStart = true;
            isPaused=false;
            isDead=false;
            isTimeRune = true;
            isRestart = false;
            btnStart.style.display = 'none';
            btnRestart.style.display='block';

            cancelAnimationFrame(req);
            req = requestAnimationFrame(gameloop);
        }
    });
    
    document.addEventListener('keydown', (event) => {

      if (
        ((event.key === " " || event.key === "Spacebar" || event.key === "Space" )  &&  isRestart && !isPaused) 
        ) {    
         
          player.style.left = players.x + 'px';
          btnRestart.style.display='block';
            isStart = true;
            isPaused=false;
            isDead=false;
            isTimeRune = true;
            isRestart = false;            
            btnStart.style.display = 'none';
            btnPause.style.display='block';  
            btnRestart.style.display='block';            

            cancelAnimationFrame(req);
            req = requestAnimationFrame(gameloop);
          }
    });
}
