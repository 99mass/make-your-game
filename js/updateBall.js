let req;
let isDead=false;
let comptLives=3;
let brickBreakedCount
let currentScore
let levelScore 
let levelKey

 // collision ball with player 
 function checkCollision() {

   // Collision avec le bord supérieur du joueur
    if (
        myBallObj.x + myBallObj.width >= players.x &&
        myBallObj.x <= players.x + players.width  &&
        myBallObj.y + myBallObj.height>= players.y 
    ) {     
        // si la a toucher les coins de de la raquette
            if (myBallObj.x + myBallObj.width/2 <= players.x || myBallObj.x + myBallObj.width/2 >=players.x + players.width ) {
                myBallObj.ballSpeedX = -myBallObj.ballSpeedX; 
            }
            myBallObj.ballSpeedY = -myBallObj.ballSpeedY;   
    
            return        
    }
}

let brickBreaked=0;
//   break brick function
function brickBreak() {
      for (let b = 0; b < allbricks.length; b++) {
         brickBreakedCount=0;
        const brick = allbricks[b];
        if (!brick.initMod && !brick.break) {
    
            if (                
                (( myBallObj.y  <= brick.y + brick.height && myBallObj.y  > brick.y)  ||  // bottom  brick
                 (myBallObj.y  +   myBallObj.height >= brick.y && (myBallObj.y  +   myBallObj.height) < brick.y + brick.height) )  && //top  brick                 
                (myBallObj.x   + myBallObj.width ) - (myBallObj.width / 2)  >= brick.x  && //left brick
                (myBallObj.x   + myBallObj.width ) - (myBallObj.width / 2) <= brick.x + brick.width    //rigth  brick                                                
            ) {      
              
                brick.break = true;
                brick.element.style.visibility= "hidden";
                myBallObj.ballSpeedY = -myBallObj.ballSpeedY;           
                brickBreakedCount+=1;
                brickBreaked+=1;
               
                
            } 
            else
            if (                
                myBallObj.y + (myBallObj.height/2)  <= brick.y + brick.height  &&  // bottom  brick
                myBallObj.y + (myBallObj.height/2) >= brick.y  && //top  brick                 
                ((myBallObj.x  <= brick.x + brick.width && myBallObj.x >= brick.x  )  ||  //rigth brick
               ( (myBallObj.x   + myBallObj.width  >= brick.x) && (myBallObj.x   + myBallObj.width <=  brick.x + brick.height) ) )   //left  brick                                 
               
            ) {         
              
                brick.break = true;
                brick.element.style.visibility= "hidden";
                myBallObj.ballSpeedX = -myBallObj.ballSpeedX;                 
                brickBreakedCount+=1;
                brickBreaked+=1;
              
            }
       
 
            if (brickBreakedCount > 0) {
                bricktouch();
                const currentLevel = lev-1; // Remplacez par le niveau actuel.

                currentScore = localStorage.getItem(`level_${currentLevel}_score`) || 0;
                // Calculez le nouveau score en fonction du nombre de briques cassées.
                let score = 10 * brickBreakedCount;
                // Ajoutez le nouveau score au score actuel.
                currentScore= xp.innerHTML=Number(xp.textContent)+score 
                
                localStorage.setItem(`level_${lev+1}_score`, currentScore);             
             }
       
        }
    }
}


function mouveBall (){
  myBallObj.x +=myBallObj.ballSpeedX;
  myBallObj.y +=myBallObj.ballSpeedY;

// la ball a toucher les gauche et droit du block
  if (myBallObj.x<=2 || myBallObj.x+myBallObj.width>=block_console.clientWidth-2 ) {  
      myBallObj.ballSpeedX = -myBallObj.ballSpeedX;       
  }

  if ( myBallObj.y <=0  ) {
      myBallObj.ballSpeedY = -myBallObj.ballSpeedY;      
  }
  
 
  // break brick here
  brickBreak() ;
  checkCollision();

// la balle a depasser la raquette
if (!(myBallObj.x + myBallObj.width >= players.x &&
    myBallObj.x <= players.x + players.width)  &&
    myBallObj.y + myBallObj.height> players.y  && !stopMovingPlayer
) {
    stopMovingPlayer=true;
    myBallObj.ballSpeedX =0; 

}


if (stopMovingPlayer && myBallObj.y> rectBlock.height ) {        
    myBallObj.ballSpeedX =_speedX;
    comptLives-=1; //decremente the live 
    gameover();
    resetGame();         
    if (!isStart) {      
        restartgame();
    }  
    stopMovingPlayer=false;
}


  // tout les bricks caches
  if (countBrickToBreaked===brickBreaked) {
      lev+=1;//augmenter le level
      
      if (!btnNextClicked) {
        initialise=false
        // create bricks
        nextLevel();

      }
  }


  MyBall.style.left = myBallObj.x +"px";
  MyBall.style.top = myBallObj.y + "px"; 
  isBallMove=true;

}
