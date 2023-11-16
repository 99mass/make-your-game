const root={
    "--mauveColor":"hsl(260, 100%, 70%)",
    "--greeneColor":"hsl(170, 100%, 35%)",
    "--gray":"hsl(0, 0%, 50%)",
    "--black":"#000",
    "--white":"#fff",
    "--yellow4": "hsl(60, 100%, 60%)",
    "--green4": "hsl(130, 100%, 50%)",
    "--lightBlue4" : "hsl(185, 100%, 60%)",
    "--red4": "hsl(340, 100%, 60%)",
    "--blue4": "hsl(216, 100%, 60%)"
};




// Appliquez les styles à chaque élément
for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.margin = '0';
    allElements[i].style.padding = '0';
    allElements[i].style.boxSizing = 'border-box';
    allElements[i].style.fontFamily = "'IBM Plex Sans', sans-serif";
}

body.style.background =root["--black"];
body.style.overflow = "hidden";

block_console.style.position = "absolute";
block_console.style.width= "50%";

block_console.style.height="705px";


block_console.style.border= `2px solid ${root["--gray"]}`;
block_console.style.margin="0px";
block_console.style.padding="0px";


container.style.display="grid";
container.style.gridTemplateColumns= "repeat(16, auto)";

container.style.margin="0px";
container.style.padding="0px";

MyBall.style.position = "absolute";
MyBall.style.bottom = "15px"; 
MyBall.style.width="16px";
MyBall.style.height="16px";
MyBall.style.background = root["--white"];
MyBall.style.borderRadius = "50px";
MyBall.style.zIndex="99";

player.style.position = "absolute";
player.style.width="100px";

player.style.height="18px";
player.style.bottom = "15px"; 
player.style.background= "#363062";

Menus.style.position="absolute";
Menus.style.right="0px";
Menus.style.width= "45%";
Menus.style.display="flex";
Menus.style.flexWrap= "wrap";
Menus.style.border= `2px solid ${root["--gray"]}`;
Menus.style.margin="2px";
Menus.style.color=root["--white"];
Menus.style.display="grid"
Menus.style.gridTemplateColumns= "repeat(1, 100%)";

sousMenus.style.display="none";


block1block2.style.display="grid";
block1block2.style.gridTemplateColumns= "repeat(2, 50%)";
block1block2.style.justifyContent="center";
block1block2.style.marginBottom="20px";


block1.style.display="grid";
block1.style.gridTemplateColumns= "repeat(1, auto)";
block1.style.justifyContent="center";
block1.style.paddingTop="20px";
block1.style.borderRight= `2px solid ${root["--gray"]}`;


block2.style.display="grid";
block2.style.gridTemplateColumns= "repeat(1, auto)";
block2.style.justifyContent="center";
block2.style.paddingTop="20px";

for (let i = 0; i < imgElementsBlock2.length; i++) {
    imgElementsBlock2[i].style.marginRight="5px";
}

block3.style.width="100%";
block3.style.borderTop= `2px solid ${root["--gray"]}`;
block3.style.paddingTop="20px";




for (let i = 0; i < h2.length; i++) {
    if (i!==1) {
        h2[i].style.textAlign= "center";
    }
    h2[i].style.fontSize="30px";
    h2[i].style.textTransform="capitalize";
    h2[i].style.marginBottom= "10px";

}


for (let i = 0; i < btnElementsBlock1.length; i++) {
    btnElementsBlock1[i].style.width= "100%";
    btnElementsBlock1[i].style.height= "50px";
    btnElementsBlock1[i].style.textAlign= "center";
    btnElementsBlock1[i].style.fontSize="33px";
    btnElementsBlock1[i].style.background="transparent";
    btnElementsBlock1[i].style.color=root["--greeneColor"];
    btnElementsBlock1[i].style.border=`1px solid ${root["--greeneColor"]}`;
    btnElementsBlock1[i].style.cursor= "pointer";
}
btnRestart.style.marginTop= "10px";


for (let i = 0; i < divElementsBlock2.length; i++) {
    divElementsBlock2[i].style.width = '100%';
    divElementsBlock2[i].style.height = '50px';
    divElementsBlock2[i].style.fontSize = '30px';
    divElementsBlock2[i].style.display = 'flex';
    divElementsBlock2[i].style.alignItems = 'center';
}


for (let i = 0; i < span1ElementsBlock2.length; i++) {
    if (i%2===0) {
        span1ElementsBlock2[i].style.marginLeft="20px";
        span1ElementsBlock2[i].style.color=root["--mauveColor"];
    }else{
        span1ElementsBlock2[i].style.color=root["--gray"];
    }

}
h2[2].style.marginBottom="10px";
// level block
carteLevel.style.display= "flex";
carteLevel.style.justifyContent= "space-around";
carteLevel.style.flexDirection= "row";
carteLevel.style.flexWrap= "wrap";

for (let i = 0; i < divCarteLevel.length; i++) {
    divCarteLevel[i].style.position= "relative";
    divCarteLevel[i].style.width= "100px";
    divCarteLevel[i].style.height= "100px";
    divCarteLevel[i].style.display= "flex";
    divCarteLevel[i].style.justifyContent= "center";
    divCarteLevel[i].style. alignItems= "center";
    divCarteLevel[i].style.fontSize= "20px";
    divCarteLevel[i].style.marginBottom= "35px";
    divCarteLevel[i].style.background= root["--gray"];
}

for (let i = 0; i < spanCarteLevel.length; i++) {
    spanCarteLevel[i].style.position = "absolute";
    spanCarteLevel[i].style.bottom= "5px";
    spanCarteLevel[i].style.left= "5px";
    spanCarteLevel[i].style.fontWeight= 400;
}





//*************** Medias query *******************************//
var px1024 = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");

var px768 = window.matchMedia("(max-width: 768px)");
var px500 = window.matchMedia("(max-width: 500px)");


if (px1024.matches) {
    MyBall.style.width="15px";
    MyBall.style.height="15px";
    player.style.width="80px";
    player.style.height="18px";

    body.style.overflowY="scroll"
    block_console.style.width= "65%";
    container.style.display="grid";

    container.style.gridTemplateColumns= "repeat(16, auto)";
    Menus.style.width= "30%";
    Menus.style.height= "auto";
    Menus.style.gridTemplateColumns= "repeat(1, auto)";

    block1block2.style.gridTemplateColumns= "repeat(1, 100%)";

    block1.style.marginBottom="10px";
    block1.style.borderRight="none";
    block2.style.borderTop= `2px solid ${root["--gray"]}`;
}


if (px768.matches) {
    btnStart=document.querySelector('._start');
    btnPause=document.querySelector('._pause');
    btnContinue=document.querySelector('._continue');
    btnRestart=document.querySelector('._restart');

    time = document.querySelector("._time");
    live=document.querySelector('._live');
    xp=document.querySelector('._xp');
    levels=document.querySelector('._level')

    body.style.overflowY="scroll"
    block_console.style.width= "80%";
    block_console.style.height=  "550px";

    container.style.display="grid";
    container.style.gridTemplateColumns= "repeat(16, auto)";

    Menus.style.position="absolute"
    Menus.style.width= "100%";
    Menus.style.top="600px";

    Menus.style.border='none'

    block1block2.style.display="none";
    sousMenus.style.display="block";

    sousMenus.style.width= "19%";
    sousMenus.style.position="fixed";
    sousMenus.style.top="10px";
    sousMenus.style.right="0px"
    sousMenus.style.display="flex";
    sousMenus.style.flexDirection="column";
    sousMenus.style.gap = "20px"; 
    sousMenus.style.fontSize="20px";
    sousMenus.style.marginBottom="20px";

    for (let i = 0; i < sousMenusButton.length; i++) {
        sousMenusButton[i].style.width= "90%";
        sousMenusButton[i].style.height= "40px";
        sousMenusButton[i].style.textAlign= "center";
        sousMenusButton[i].style.fontSize="20px";
        sousMenusButton[i].style.background="transparent";
        sousMenusButton[i].style.color=root["--greeneColor"];
        sousMenusButton[i].style.border=`1px solid ${root["--greeneColor"]}`;
        sousMenusButton[i].style.cursor= "pointer";
        
    }
    btnRestart.style.marginTop= "0px";
    for (let i = 0; i < sousMenusDivImg.length; i++) {
        const im = sousMenusDivImg[i];
        im.style.display="none";
        
    }

    for (let i = 0; i < sousMenusDivSpan.length; i++) {
        
        sousMenusDivSpan[i].style.color=root["--mauveColor"];

    }

}

if (px500.matches) {

    block_console.style.width= "100%";
    block_console.style.height=  "500px";

   
    MyBall.style.width="13px";
    MyBall.style.height="13px";
    player.style.width="80px";

    Menus.style.width="100%";
    Menus.style.top="520px";


    sousMenus.style.width= "100%";
    sousMenus.style.position="relative";
    sousMenus.style.display="flex";
    sousMenus.style.flexDirection="row";
    sousMenus.style.flexWrap="wrap"
    sousMenus.style.justifyContent="space-around"

    for (let i = 0; i < sousMenusButton.length; i++) {
        sousMenusButton[i].style.width= "105px";
    }

}
