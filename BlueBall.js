class BlueBall{

    constructor(posX){
        this.posX = posX;
        //this.state = state;
    };

    draw(){
        let colored = color(185,225,235);
        if(dist(this.posX, 180, 160, 180) > -30 && dist(this.posX, 180, 160, 180) < 30){
            //console.log('ya casi');
            colored = color(255, 195, 77);
        };

        if(dist(this.posX, 180, 160, 180) > -4 && dist(this.posX, 180, 160, 180) < 4){
            //console.log('pase el centro');
            colored = color(255,0,0);
        };
        fill(colored);
        circle(this.posX, 180, 80);
    }

    /*evaluateCenter(){
        if(dist(this.posX, 180, 160, 180) > -4 && dist(this.posX, 180, 160, 180) < 4){
            console.log('Estoy en el centro'+ this.points);
            this.points += 2;
        } 
    }*/

    /*evaluateNear(){
        if(dist(this.posX, 180, 160, 180) > -30 && dist(this.posX, 180, 160, 180) < 30){
            console.log('estuve cerca'+ this.points);
            this.points += 1;
        };
    }*/

    evaluate(){
        
        if(dist(this.posX, 180, 160, 180) >= -12 && dist(this.posX, 180, 160, 180) <= 12){
            console.log('Estoy en el centro');
            //this.points = true;
            //original es 4
        } 

        if(dist(this.posX, 180, 160, 180) >= -40  && dist(this.posX, 180, 160, 180) >= -13 && dist(this.posX, 180, 160, 180) >= 13 && dist(this.posX, 180, 160, 180) < 40){
            console.log('estuve cerca');
            //this.points = false;
            //original es 30
        };

    }

}