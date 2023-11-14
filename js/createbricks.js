let allbricks=[];

// defind form brick
const brickToHidden=[
                    [   
                        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
                        17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
                        33,34,35,46,47,48,
                        49,50,51,62,63,64,
                        65,66,67,78,79,80,
                        81,82,83,94,95,96
                    ],
                    [ 
                        1,2,3,14,15,16,
                        17,18,19,21,22,23,24,25,26,27,28,30,31,32,
                        33,34,35,37,40,41,44,46,47,48,
                        49,50,51,53,54,55,58,59,60,62,63,64,
                        65,66,67,69,70,71,72,73,74,75,76,78,79,80,
                        81,82,83,94,95,96
                    ],
                    [   
                        1,2,15,16,
                        17,18,19,20,21,28,29,30,31,32,
                        33,34,35,36,45,46,47,48,49,
                        50,51,62,63,64,
                        65,66,67,68,69,70,75,76,77,78,79,80,
                        81,82,83,84,85,86,87,90,91,92,93,94,95,96
                    ],
                    [   
                        1,2,7,8,9,10,15,16,
                        17,18,19,21,23,24,25,26,28,30,31,32,
                        33,34,35,37,39,40,41,42,44,46,47,48,
                        49,50,51,53,55,58,60,62,63,64,
                        65,66,67,69,71,74,76,78,79,80,
                        81,82,83,94,95,96
                    ],
                    [],
                ];


let countBrickToBreaked=0;

function createBricks(numberofbrick) {
    
    const brickHeight = 25;
    countBrickToBreaked =0
    
    

    for (let row = 0; row < numberofbrick; row++) {
                       
            const brick = document.createElement("div");   
            brick.className =`brick brick_${row}`; 
            brick.style.height = brickHeight + "px";
            brick.style.border=`0.5px solid${root["--black"]}`;
            brick.style.borderTop="none";
            brick.style.borderRight="none";

            let breaked=true;

            if ( lev === 0 && !brickToHidden[lev].includes(row+1) ) {

                let currentLevel = localStorage.getItem("level") || 0;
                 currentLevel =  levels.innerHTML 
                brick.style.backgroundColor=root["--green4"];
               
                breaked=false;
            }
            else  if ( lev===1 && !brickToHidden[lev].includes(row+1) ) { 
               
                brick.style.backgroundColor=root["--yellow4"];
                
                breaked=false;
            }
            else  if ( lev===2 && !brickToHidden[lev].includes(row+1) ) {                
                brick.style.backgroundColor=root["--lightBlue4"];
                breaked=false;
            }
            else  if ( lev===3 && !brickToHidden[lev].includes(row+1) ) {                
                brick.style.backgroundColor=root["--red4"];
                breaked=false;
            }else  if ( lev===4 && !brickToHidden[lev].includes(row+1) ) {                
                brick.style.backgroundColor=root["--blue4"];
                breaked=false;
            }
            if (!breaked) {
                countBrickToBreaked+=1;
               
            }
                       
            container.appendChild(brick);

            const el=document.querySelector(`.brick_${row}`);

            const rectel=el.getBoundingClientRect();
            const width_el=rectel.width;
            const height_el=rectel.height;
            const x_el=rectel.x;
            const y_el=rectel.y;
            let _brick={                
                element:el,
                width:width_el,
                height:height_el,
                x:x_el,
                y:y_el,
                index:row, 
                break:breaked,
                initMod:breaked  ,                  
            }
    
           
            allbricks.push(_brick);
                             
    }
}

