let btnNextClicked=false;


function showCustomAlert (status) {
    currentLevel =  levels.innerHTML 

    // Create an element for the dialog box
    var dialogBox = document.createElement("div");
    dialogBox.style.background = "white";
    dialogBox.style.border = "1px solid #ccc";
    dialogBox.style.padding = "20px";
    dialogBox.style.position = "fixed";
    dialogBox.style.top = "-800px"; // Initial position at the top
    dialogBox.style.left = "50%";
    dialogBox.style.transform = "translate(-50%, 0)"; // Initial transform
    dialogBox.style.zIndex = "9999";
    dialogBox.style.transition = "top 0.5s, transform 0.5s"; // Add transition properties

    // Create the content of the dialog
    var title = document.createElement("h1");

   
    if (status==="win") {
        title.textContent = `Level ${lev} complete`;
    }else if(status==="champion"){
       
        title.textContent = `Congratulations Champion`;
    }
    else{
        title.textContent = "Game Over";
        currentScore =0
       
    }
    dialogBox.appendChild(title);

    var svg = document.createElement('img');
    let path="";
    if (status==="win") {
        path="svg/status-success-svgrepo-com.svg";
    }else if(status==="champion"){
        path="svg/trophy-cup-svgrepo-com.svg";
    }else{
        path="svg/danger-zone-svgrepo-com.svg";
    }
    svg.src = path;
    dialogBox.appendChild(svg);

    var contenMessageBtn = document.createElement('div');
    contenMessageBtn.style.float = "right";
    contenMessageBtn.style.paddingBottom = "40px";
    contenMessageBtn.style.paddingLeft = "20px";
    contenMessageBtn.style.paddingRight = "20px";

    var message = document.createElement("p");
    if (status==="win") {
        message.innerHTML = "Congratulations on winning the level! <p> You're a <strong>Brick Breaker pro</strong>. Keep it up, and you'll go far.</p>";
    }else if(status==="champion"){
        message.innerHTML = "You win on every level . <p> Thanks to your determination and expertise.</p> <p> If you wish to replay click on the retry button.</p>";
    }else{
        message.innerHTML = "You've lost the game. <p> Don't give up, try again and conquer the next level!</p>";

    }
    contenMessageBtn.appendChild(message);

    var nextButton = document.createElement("button");
    if (status==="win") {
        nextButton.textContent = "Next";
    }else {
        nextButton.textContent = "Retry";  
    }
    nextButton.style.position = "absolute";
    nextButton.style.right = "0";
    nextButton.style.padding = "10px 30px";
    nextButton.style.marginRight = "40px";
    nextButton.style.background = "#333";
    nextButton.style.color = "#fff";
    nextButton.style.border = "none";
    nextButton.style.fontSize = "15px";
    nextButton.style.cursor = "pointer";
    nextButton.addEventListener("click", function () {
       
        dialogBox.style.display = "none";
        btnNextClicked=true;
        initialise=true;
        if(status==="champion"){
            window.location.reload();//recommencer le jeux
            // localStorage.clear()
        }
    });
    contenMessageBtn.appendChild(nextButton);

    dialogBox.appendChild(contenMessageBtn);

    // Add the dialog box to the page
    document.body.appendChild(dialogBox);

    // Trigger the transition to move the dialog to the center
    setTimeout(function () {
        dialogBox.style.top = "50%";
        dialogBox.style.transform = "translate(-50%, -50%)";
    }, 10);


    // Medias Query
    if (px768.matches) {
        dialogBox.style.width="80%";
    }

}


function showDetailLevelAlert (_lev) {
    // Create an element for the dialog box
    var dialogBox = document.createElement("div");
    dialogBox.style.width="500px";
    dialogBox.style.height="250px";
    dialogBox.style.background = "white";
    dialogBox.style.border = "1px solid #ccc";
    dialogBox.style.padding = "20px";
    dialogBox.style.position = "fixed";
    dialogBox.style.top = "-800px"; // Initial position at the top
    dialogBox.style.left = "50%";
    dialogBox.style.transform = "translate(-50%, 0)"; // Initial transform
    dialogBox.style.zIndex = "9999";
    dialogBox.style.transition = "top 0.5s, transform 0.5s"; // Add transition properties

    // Create the content of the dialog
    var title = document.createElement("h1");
    title.textContent = `Stats Level ${_lev}`;

    dialogBox.appendChild(title);

    var svg = document.createElement('img');
    let path="svg/status-success-svgrepo-com.svg";
    svg.src = path;

    dialogBox.appendChild(svg);

    var contenMessageBtn = document.createElement('div');
   
    contenMessageBtn.style.paddingBottom = "40px";
    contenMessageBtn.style.paddingLeft = "2px";
    contenMessageBtn.style.paddingRight = "20px";
   
    var message = document.createElement("p");

   // Stockez le score et le time du niveau mis à jour.
    let scoreLevel =  localStorage.getItem(`level_${_lev}_score`);
    let timeLevel =  localStorage.getItem(`level_${_lev}_time`);
    let liveLevel = localStorage.getItem(`level_${_lev}_live`)
    
    message.innerHTML = `<p>Time : <strong>${timeLevel}</strong></p>
    <p>Lives : <strong>${liveLevel}/3</strong></p>
    <p>Score : <strong>${scoreLevel}XP</strong></p>
    `;


    message.style.position = "relative";
    message.style.top="-70px";
    message.style.left="90px";
    message.style.fontSize="20px"
    contenMessageBtn.appendChild(message);

    var nextButton = document.createElement("button");
    nextButton.textContent = "Close";

    nextButton.style.position = "absolute";
    nextButton.style.bottom="10px"
    nextButton.style.right = "0";
    nextButton.style.padding = "15px 60px";
    nextButton.style.marginRight = "10px";
    nextButton.style.background = root["--blue4"];
    nextButton.style.color = "#fff";
    nextButton.style.border = "none";
    nextButton.style.fontSize = "20px";
    nextButton.style.cursor = "pointer";
    nextButton.addEventListener("click", function () {       
        dialogBox.style.display = "none";
        initialise=true;
    });
    contenMessageBtn.appendChild(nextButton);

    dialogBox.appendChild(contenMessageBtn);

    // Add the dialog box to the page
    document.body.appendChild(dialogBox);

    // Trigger the transition to move the dialog to the center
    setTimeout(function () {
        dialogBox.style.top = "45%";
        dialogBox.style.transform = "translate(-50%, -50%)";
    }, 10);

        // Medias Query
        if (px768.matches) {
            dialogBox.style.width="80%";
        }

}