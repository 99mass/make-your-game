function resetGame() {
  cancelAnimationFrame(req);
    btnContinue.style.display='none';
    btnPause.style.display='none';
  
    myBallObj.x=myBallObjX;
    myBallObj.y=myBallObjY ;
    players.x=playersX;
    
    isDead=true;
    isStart=false;
    isBallMove=false;
    isMovingLeft= false
    isMovingRight =false

    player.style.left=players.x+ 'px';
    MyBall.style.left=myBallObj.x+ 'px';
    MyBall.style.top = myBallObj.y + "px";
    
    live.textContent=comptLives;

    if (comptLives===0) {
      brickBreaked=0;
      showCustomAlert("lose");
      if (!btnNextClicked) {
        initialise=false
      }

      index=0;
      isTimeRune=false;
      comptLives=3; 
      live.textContent=comptLives;
      xp.innerHTML=localStorage.getItem(`level_${currentLevel-1}_score`) || 0; //remettre le score a 0XP
          
      time.innerHTML = currentTime;
      // reconstitue the brick block
      reconstitueBricks(); 

     
    }
    isTimeRune=false;
    
    btnStart.style.display='block';
  }

