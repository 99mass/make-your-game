function resetGame() {

    btnContinue.style.display='none';
    btnPause.style.display='none';
  
    myBallObj.x=myBallObjX;
    myBallObj.y=myBallObjY ;
    players.x=playersX;
    
    isDead=true;
    isStart=false;
    isBallMove=false;

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

        
      isTimeRune=false;
      comptLives=3; 
      live.textContent=comptLives;
      xp.innerHTML=0; //remettre le score a 0XP
    
      timeFinish=true;
      time.innerHTML = currentTime;
      // reconstitue the brick block
      reconstitueBricks(); 

     
    }
  
    
    btnStart.style.display='block';

    // start game commade withe the touche Enter or start button
    startGame();
    
  }

