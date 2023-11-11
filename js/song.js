function gameSong(status) {
  let x = document.createElement("audio");
  x.src = "../audio/Code_Lyoko_Theme_Song.mp3";
  if (status) {    
    x.play();
  } else {
    x.pause();
  }
}


function gameover() {
    let x = document.createElement("audio");
    x.src = "../audio/gameover.wav";
    x.play();
    // console.log("sonOver");
  }

  function collisionSon(){
    let x =document.createElement('audio');
    x.src= "../audio/jump.wav"
    x.play();
    // console.log("sonCollison")
  }

  
  function bricktouch() {
    let x = document.createElement("audio");
    x.src = "../audio/bricktouch.wav";
    x.play();
    // console.log("sonBRI");
}