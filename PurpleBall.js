class PurpleBall{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
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
        circle(this.posX, this.posY, 80);
    }

    evaluate(){
        
        if(dist(this.posX, 180, 160, 180) >= -12 && dist(this.posX, 180, 160, 180) <= 12){
            
            return "centro";

        } 

        if(dist(this.posX, 180, 160, 180) >= -40  && dist(this.posX, 180, 160, 180) >= -13 && dist(this.posX, 180, 160, 180) >= 13 && dist(this.posX, 180, 160, 180) < 40){
            
            return "cerca";

        };

    }
}

