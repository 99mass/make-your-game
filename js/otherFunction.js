let index;
let isPageActive = true; // Variable pour suivre l'état de la page

function times(temps) {
    let currentTime = temps;
     index = currentTime;
    let intervalId; // Stocke l'ID de l'intervalle

    if (!isPageActive || isRestart ) {
      index = currentTime;
    } 
    function updateCountdown() {
      const currentLevel = lev-1; // Remplacez par le niveau actuel.
      currentTime = localStorage.getItem(`level_${currentLevel}time`) || 0;
      currentTime = time.innerHTML = index;

      localStorage.setItem(`level_${lev+1}_time`, currentTime);

      if (!isPaused && isTimeRune ) {          
        index++;
        isReset=true;
      }
     }


    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    // Écouteur d'événement pour le changement d'état de la page
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // La page est devenue active
        isPageActive = true;
        if (isTimeRune) {
          // Reprendre le décompte si nécessaire
          intervalId = setInterval(updateCountdown, 1000);
        }
      } else {
        // La page est devenue inactive
        isPageActive = false;
        clearInterval(intervalId); // Mettre en pause le décompte
      }
    });

}



// function startTime() {
//   document.addEventListener('keydown', (event) => {
//     if (
//         (event.key === " "||event.key === "Spacebar" ||event.key === "Space") && !isRestart && !isPaused && !isStart && !isTimeRune          
//         ) {        
//         times(currentTime); 
//     }
//   });
  
//   btnStart.addEventListener('click', () => {
//     if (!isStart && !isPaused  && !isTimeRune && !isRestart) {        
//         times(currentTime);         
//     }
//   });
  
// }


function reconstitueBricks() {
  for (let b = 0; b < allbricks.length; b++) {
    const brick = allbricks[b];
    if ( !brick.initMod && brick.break) {
      
      brick.element.style.visibility= "visible";
      brick.break=false;
    }  
  }   
}

function initialiseElementDOM() {

    MyBall.style.top = myBallObj.y + "px";
    MyBall.style.left=myBallObj.x+ 'px';
    player.style.top=players.y +3+ 'px';
    player.style.left=players.x+ 'px';

    btnPause.style.display='none';
    btnContinue.style.display='none';
    time.innerHTML = currentTime;
}



// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowUp') {
//          myBallObj.ballSpeedX *= 0.5;
//          myBallObj.ballSpeedY *= 0.5;
//     }
//     if (event.key === 'ArrowDown') {
//         myBallObj.ballSpeedX *= 2;
//         myBallObj.ballSpeedY *= 2;
//    }
// });















//   function updateCountdown() {
//     if (timeFinish || !isTimeRune || !isPageActive ) {
//        index = currentTime;
//     } else {
//       if (index >= 0) {
//         time.innerHTML = index;
//         if (index <= 10) {
//           time.style.color = "red";
//         }
//         if (!isPaused) {          
//           index--;
//         }
//       } else {
//         timeFinish = true;
       
//         gameover();
//         resetGame();
//       }
//     }
//   }

//   updateCountdown();
//   intervalId = setInterval(updateCountdown, 1000);

//   // Écouteur d'événement pour le changement d'état de la page
//   document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible') {
//       // La page est devenue active
//       isPageActive = true;
//       if (isTimeRune) {
//         // Reprendre le décompte si nécessaire
//         intervalId = setInterval(updateCountdown, 1000);
//       }
//     } else {
//       // La page est devenue inactive
//       isPageActive = false;
//       clearInterval(intervalId); // Mettre en pause le décompte
//     }
//   });
// }


