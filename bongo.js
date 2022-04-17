var screen;
var firstScreen;
var secondScreen;
var thirdScreen;
var gameScreen;
var startBtn;
var continueBtn;
var bongo;
var bongoDefault;
var bongoBoth;
var bongoPurple;
var bongoBlue;
var blueBalls
var purpleBalls;

var blueArray;
var purpleArray;

let a;

var allBalls;
var purplePosX;
var bluePosX;
var defaultPosX;
var perfecto;
var bueno;
var malo;
var bongoMoradoSonido;
var bongoAzulSonido;
var level1;

var create;
let puntos;
let counter;

var twoValidPoints;
var oneValidPoint;

var perfectBlue;

var purpleState;
var blueState;

var isPressingQ;
var isPressingP;

var pressedP;
var pressedQ;

let isValid;

function preload(){
    screen = 3;
    //screens
    firstScreen = loadImage('assets/pantalla1.png');
    secondScreen = loadImage('assets/pantalla2.png');
    thirdScreen = loadImage('assets/pantalla3.png');
    gameScreen = loadImage('assets/pantallaJuego.png');

    //buttons
    startBtn = loadImage('assets/btn_jugar.png');
    continueBtn = loadImage('assets/btn_continuar.png');

    //bongon
    bongoDefault = loadImage('assets/bongo1.png');
    bongoBoth = loadImage('assets/bongo2.png');
    bongoPurple = loadImage('assets/bongo3.png');
    bongoBlue = loadImage('assets/bongo4.png');

    //balls
    blueBalls = loadImage('assets/caritaPerfecto.png');
    perfectBlue = color(185,225,235);
    
    purplePosX = 1080;
    bluePosX = purplePosX +75;
    defaultPosX = 145;
    
    //estados
    bueno = loadImage('assets/bueno.png');
    malo = loadImage('assets/malo.png');
    perfecto = loadImage('assets/perfecto.png');

    //arrays
    blueArray = new Array(5);
    purpleArray = new Array(5);
    //PurpleBalls = new PurpleBall(880, 180, 80);
    
    //sonidos
    bongoMoradoSonido = loadSound('sounds/soundBongoMorado.mp3');
    bongoAzulSonido = loadSound('sounds/soundBongoAzul.mp3');
    level1 = loadSound('sounds/level1.mp3');

    //bolean
    create = false;
    isPressingQ = false;
    isPressingP = false;
    isValid = false;

    pressedQ = false;
    pressedP = false;
    

    //points
    //puntos = 0;
    counter = 0;
    twoValidPoints = false;
    oneValidPoint = false;

    //estados
    //state = 1;
}

function setup(){
    createCanvas(1080, 720),
    background(0);      
}

function draw(){
    
    switch(screen){
        case 0:
            image(firstScreen, 0, 0);
            image(startBtn, 450, 500);
            break;
        
        case 1:
            image(secondScreen, 0, 0);
            image(continueBtn, 681, 556);
            break;

        case 2:
            image(thirdScreen, 0, 0);
            image(startBtn, 460, 575);
            startBtn.resize(161, 45);
            break;

        case 3:
            image(gameScreen, 0, 0);

            if(create === true){
                //para crear 36 pelotas moradas
                for(let i = 0; i < purpleArray.length; i++){
                    newPurplePosX = purplePosX + defaultPosX* i
                    purpleArray[i] = new PurpleBall(newPurplePosX, purpleState);
                    purpleArray[i].draw();
                    
                    //presionando la Q
                    if(keyIsDown(81)){
                        purpleArray[i].evaluate();
                        if(parseInt(Object.values(purpleArray[i])) >= -12 && parseInt(Object.values(purpleArray[i])) <= 12){
                            counter +=1;
                        } else if(dist(parseInt(Object.values(purpleArray[i])), 180, 160, 180) >= -40 && parseInt(Object.values(purpleArray[i])) >=-13 && parseInt(Object.values(purpleArray[i]))  >=13 && dist(parseInt(Object.values(purpleArray[i])), 180, 160, 180) <= 40){
                            counter +=2;
                        }
                    }
                }

                for(a = 0; a < blueArray.length; a++){
                    let newBluePosX = bluePosX + defaultPosX* a
                    blueArray[a] = new BlueBall(newBluePosX);
                    blueArray[a].draw();
                    //console.log(parseInt(Object.values(blueArray[a])));

                    //presionando la P
                    /*if(pressedP == true){
                            blueArray[a].evaluate();
                        if(parseInt(Object.values(blueArray[a])) >= -12 && parseInt(Object.values(blueArray[a])) <= 12){
                            twoValidPoints = true;
                            //isPressingP = true;
                            //counter +=1;
                        } else if(dist(parseInt(Object.values(blueArray[a])), 180, 160, 180) >= -40 && parseInt(Object.values(blueArray[a])) >=-13 && parseInt(Object.values(blueArray[a]))  >=13 && dist(parseInt(Object.values(blueArray[a])), 180, 160, 180) <= 40){
                            oneValidPoint = true;
                            //isPressingQ = true;
                            //counter +=2;
                        }
                        !pressedP;
                    }*/

                    if(keyIsDown(80)){
                        
                    }

                }

                //para que las pelotas se empiecen a mover despues de 10 segundos y desaparezcan cuando ya no se muestren en la pantalla
                setTimeout(()=>{
                    if(bluePosX < -5220){
                        purplePosX = -5300;
                        bluePosX = -5300;
                    
                    }else{
                        purplePosX -=3;
                        bluePosX -=3;

                }}, 1000);
            }
            
            image(bongoDefault, 349, 455);
            if(keyIsDown(81)){
                //console.log("lista la q");
                image(bongoPurple, 349, 455);

            }
            if(keyIsDown(80)){
                //console.log("lista la p");
                image(bongoBlue, 349, 455);
                
            }

            textSize(32);
            text(counter, 930, 82);

            break;

        case 4:
            break;
    }
    text('X:'+mouseX+ 'Y:'+mouseY, mouseX, mouseY);
}

function moves(){
    purplePosX -=1;
    bluePosX -=1;
}


function mouseClicked(){
    if(screen == 0 && mouseX > 450 && mouseX < 700 && mouseY > 500 && mouseY < 575){
        screen = 1;
    }

    if(screen == 1 && mouseX > 681 && mouseX < 855 && mouseY > 556 && mouseY < 609){
        screen = 2;
    }

    if(screen == 2 && mouseX > 460 && mouseX < 618 && mouseY > 574 && mouseY < 618){
        screen = 3;
    }

    if(screen == 3){
        //level1.play();
        create = true;
    }

}

function keyPressed(){
    if(screen == 3){
        //presiona la tecla q
        if(keyCode === 81){
            bongoMoradoSonido.play();
            /*if(isPressingQ == true){
                counter += 2;
                !isPressingQ;
            }*/
        }
        
        //presiona la tecla p
        if(keyCode === 80){
            bongoAzulSonido.play();
            for(let e = 0; e < blueArray.length; e++){
                blueArray[e].evaluate();
                if(parseInt(Object.values(blueArray[e])) >= -12 && parseInt(Object.values(blueArray[e])) <= 12){
                    //twoValidPoints = true;
                    //isPressingP = true;
                    counter +=2;
                    console.log(counter);
                } 

                if(dist(parseInt(Object.values(blueArray[e])), 180, 160, 180) >= -40 && parseInt(Object.values(blueArray[e])) >-12 && parseInt(Object.values(blueArray[e]))  >12 && dist(parseInt(Object.values(blueArray[e])), 180, 160, 180) <= 40){
                    //oneValidPoint = true;
                    //isPressingQ = true;
                    counter +=1;
                    console.log(counter);
                }

                /*if(parseInt(Object.values(blueArray[e])) >= -12 && parseInt(Object.values(blueArray[e])) <= 12){
                    counter += 2;
                    !twoValidPoints;
                } else if(dist(parseInt(Object.values(blueArray[e])), 180, 160, 180) >= -40 && parseInt(Object.values(blueArray[e])) >=-13 && parseInt(Object.values(blueArray[e]))  >=13 && dist(parseInt(Object.values(blueArray[e])), 180, 160, 180) <= 40){
                    counter += 1;
                    !oneValidPoint;
                    //isPressingQ = true;
                    //counter +=2;
                }*/

                /*if(twoValidPoints === true){
                    counter = counter + 2;
                    !twoValidPoints;
                }
                if(oneValidPoint === true){
                    counter = counter + 1;
                    !oneValidPoint;
                }*/

                /*if(isPressingP == true){
                    counter +=1;
                    !isPressingP;
                }*/
                pressedP = true;
            }
            
            /**/

            //console.log(parseInt(Object.values(blueArray[a])));
        }
    }
    
}


