class PurpleBall{
    constructor(posX, state){
        this.posX = posX;
        this.state = state;
    };

    draw(){
        let colored = color(139,100,134);
        if(dist(this.posX, 180, 160, 180) > -30 && dist(this.posX, 180, 160, 180) < 30){
            //console.log('ya casi');
            colored = color(255, 195, 77);
        };

        if(dist(this.posX, 180, 160, 180) > -4 && dist(this.posX, 180, 160, 180) < 4){
            //console.log('pase el centro');
            colored = color(255,0,0);
        };
        fill(colored);
        circle(this.posX, 262, 80);
    }

    evaluate(){
        if(dist(this.posX, 180, 160, 180) >= -12 && dist(this.posX, 180, 160, 180) <= 12){
            this.state = true;
        }else if(dist(this.posX, 180, 160, 180) >= -40 && dist(this.posX, 180, 160, 180) >= -13 && dist(this.posX, 180, 160, 180) >= 13 && dist(this.posX, 180, 160, 180) < 40){
            this.state = false;
        };

        if(this.state == true){
            if(dist(this.posX, 180, 160, 180) >= -12 && dist(this.posX, 180, 160, 180) <= 12){
                console.log('Estoy en el centro');
                this.points = true;
                //original es 4
            } 
        }else if(this.state == false){
            if(dist(this.posX, 180, 160, 180) >= -40  && dist(this.posX, 180, 160, 180) >= -13 && dist(this.posX, 180, 160, 180) >= 13 && dist(this.posX, 180, 160, 180) < 40){
                console.log('estuve cerca');
                this.points = false;
                //original es 30
            };
        }
    }
}

