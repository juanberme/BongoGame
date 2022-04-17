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

var allBalls;
var purplePosX;
var bluePosX;
var defaultPosX;

var perfecto;
var bueno;
var malo;

var bongoMoradoSonido;
var bongoAzulSonido;

var levelCounter;
var level1;
var level2;

var create1;
var create2;

let counter1;
let counter2;

function preload(){
    screen = 4;
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

    //level
    levelCounter = 1;

    //levels songs
    level1 = loadSound('sounds/level1.mp3');
    level2 = loadSound('sounds/level2.mp3');

    //bolean
    create1 = false;
    create2 = false;

    //contador
    counter1 = 0;
    counter2 = 0;

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

            if(create1 === true){
                //para crear 36 pelotas moradas
                for(let i = 0; i < purpleArray.length; i++){
                    newPurplePosX = purplePosX + defaultPosX* i
                    purpleArray[i] = new PurpleBall(newPurplePosX);
                    purpleArray[i].draw();
                    
                }

                for(let a = 0; a < blueArray.length; a++){
                    let newBluePosX = bluePosX + defaultPosX* a
                    blueArray[a] = new BlueBall(newBluePosX);
                    blueArray[a].draw();

                }

                //para que las pelotas se empiecen a mover despues de 10 segundos y desaparezcan cuando ya no se muestren en la pantalla
                setTimeout(()=>{
                    if(bluePosX < -5220){
                        purplePosX = -5300;
                        bluePosX = -5300;
                    
                    }else{
                        purplePosX -=3;
                        bluePosX -=3;

                }}, 10000);
            }
            
            image(bongoDefault, 349, 455);

            if(keyIsDown(81)){
                //console.log("lista la q");
                image(bongoPurple, 349, 455);
                
                for(let q = 0; q <purpleArray.length; q++){
                    switch(purpleArray[q].evaluate()){
                        case 'centro':
                            image(perfecto, 0, 184);
                            break;

                        case 'cerca':
                            image(bueno, 0, 184);
                            break;

                        default:
                            
                    }
                    
                }
            }
            if(keyIsDown(80)){
                //console.log("lista la p");
                image(bongoBlue, 349, 455);

                for(let q = 0; q <blueArray.length; q++){
                    switch(blueArray[q].evaluate()){
                        case 'centro':
                            image(perfecto, 0, 184);
                            break;

                        case 'cerca':
                            image(bueno, 0, 184);
                            break;

                        default:
                            
                    }
                    
                }
                
            }
            
            //text
            textSize(32);
            text(counter1, 930, 82);
            text(levelCounter, 236, 82);

            break;

        case 4:
            image(gameScreen, 0, 0);
            levelCounter = 2;

            textSize(32);
            text(counter2, 930, 82);
            text(levelCounter, 236, 82);

            if(create2 === true){
                //para crear 36 pelotas moradas
                for(let i = 0; i < purpleArray.length; i++){
                    newPurplePosX = purplePosX + defaultPosX* i
                    purpleArray[i] = new PurpleBall(newPurplePosX);
                    purpleArray[i].draw();
                    
                }

                for(let a = 0; a < blueArray.length; a++){
                    let newBluePosX = bluePosX + defaultPosX* a
                    blueArray[a] = new BlueBall(newBluePosX);
                    blueArray[a].draw();

                }

                setTimeout(()=>{
                    if(bluePosX < -5220){
                        purplePosX = -5300;
                        bluePosX = -5300;
                    
                    }else{
                        purplePosX -=3;
                        bluePosX -=3;
                //corregir a 10seg
                }}, 1000);
            }
            image(bongoDefault, 349, 455);

            if(keyIsDown(81)){
                //console.log("lista la q");
                image(bongoPurple, 349, 455);
                
                for(let q = 0; q <purpleArray.length; q++){
                    switch(purpleArray[q].evaluate()){
                        case 'centro':
                            image(perfecto, 0, 184);
                            break;

                        case 'cerca':
                            image(bueno, 0, 184);
                            break;

                        default:
                            
                    }
                    
                }
            }
            if(keyIsDown(80)){
                //console.log("lista la p");
                image(bongoBlue, 349, 455);

                for(let q = 0; q <blueArray.length; q++){
                    switch(blueArray[q].evaluate()){
                        case 'centro':
                            image(perfecto, 0, 184);
                            break;

                        case 'cerca':
                            image(bueno, 0, 184);
                            break;

                        default:
                            
                    }
                    
                }
                
            }

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
        level1.play();
        create1 = true;
        if(create1 === true){
            setTimeout(()=>{
                screen = 4;
                }, 60000);
        }
    }

    if(screen == 4){
        //level2.play();
        create2 = true;
    }
}

function keyPressed(){
    if(screen == 3){
        //presiona la tecla q
        if(keyCode === 81){
            bongoMoradoSonido.play();
            for(let h = 0; h < purpleArray.length; h++){
                purpleArray[h].evaluate();

                if(purpleArray[h].evaluate() === 'centro'){
                    console.log('Estoy en el centro');
                    counter1 += 2;
                }

                if(purpleArray[h].evaluate() === 'cerca'){
                    console.log('estuve cerca');
                    counter1 += 1;
                }

                console.log(counter1);

            }
        }
        
        //presiona la tecla p
        if(keyCode === 80){
            bongoAzulSonido.play();
            for(let e = 0; e < blueArray.length; e++){
                blueArray[e].evaluate();
                
                if(blueArray[e].evaluate() === 'centro'){
                    console.log('Estoy en el centro');
                    counter1 += 2;
                } 

                if(blueArray[e].evaluate() === 'cerca'){
                    console.log('estuve cerca');
                    counter1 += 1;
                }

                console.log(counter1);

            }
            
        }
    }

    
    if(screen == 4){

        //presiona la tecla q
        if(keyCode === 81){
            bongoMoradoSonido.play();

            for(let h = 0; h < purpleArray.length; h++){
                purpleArray[h].evaluate();

                if(purpleArray[h].evaluate() === 'centro'){
                    console.log('Estoy en el centro');
                    counter2 += 2;
                }

                if(purpleArray[h].evaluate() === 'cerca'){
                    console.log('estuve cerca');
                    counter2 += 1;
                }

                console.log(counter2);

            }
        }

         //presiona la tecla p
        if(keyCode == 80){
            bongoAzulSonido.play();

            for(let e = 0; e < blueArray.length; e++){
                blueArray[e].evaluate();
                
                if(blueArray[e].evaluate() === 'centro'){
                    console.log('Estoy en el centro');
                    counter2 += 2;
                } 

                if(blueArray[e].evaluate() === 'cerca'){
                    console.log('estuve cerca');
                    counter2 += 1;
                }

                console.log(counter2);

            }
        }
    }
    
}


