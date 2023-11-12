function nextLevel() {
  cancelAnimationFrame(req);
  if (lev<5) {
    showCustomAlert("win"); 
  }
    brickBreaked=0;

    if (lev<=5) {
        divCarteLevel[lev-1].style.background=root["--greeneColor"];
        imgCarteLevel[lev-1].src="svg/validate-svgrepo-com.svg";
        divCarteLevel[lev-1].style.cursor= "pointer";      
    }
    

    if (lev===5) {
      showCustomAlert("champion");//the champion alert
        lev=5;
    }
        
    btnContinue.style.display='none';
    btnPause.style.display='none';
  
    myBallObj.x=myBallObjX;
    myBallObj.y=myBallObjY ;
    players.x=playersX;

    // augmenter la vitesse du ball
    _speedY=_speedY-1;

    // reinitialiser la vitesse Y
    if (lev===0) {
      _speedY=-6;
    }
    myBallObj.ballSpeedY=_speedY;
  
    
    player.style.left=players.x+ 'px';
  
    isStart=false;

    const currentLevel = lev;
    let  currentLive= localStorage.getItem(`level_${currentLevel}_live`) || 0
    currentLive = live.textContent=comptLives;
    localStorage.setItem(`level_${currentLevel}_live`,currentLive)
  

    isMovingLeft= false
    isMovingRight =false
    comptLives=3;
    isTimeRune=false;
    live.textContent=comptLives;
    index=0;
    time.innerHTML = currentTime;
    
    if (Number(levels.textContent)===5) {
      levels.innerHTML=1;
    }else{
      levels.innerHTML=Number(levels.textContent)+1;
    }

    allbricks=[]; 
    container.textContent="";
    // create bricks
    createBricks(96);
    
    btnStart.style.display='block';

    // start game commade withe the touche Enter or start button
    startGame();

    // restart the game
    restartgame();

    // show resume
    for (let i = 0; i < divCarteLevel.length; i++) {
        const l = divCarteLevel[i];
        if (lev -1 >=i  ) {
          l.addEventListener("click", function () {
              showDetailLevelAlert(i+1 );       
          });
        }      
    }
    
  }