class box{
    constructor(x,y,w,h){
        var options = {
            restitution : 0.2,
            friction : 0.5
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.w = w;
        this.h = h;
        this.visibility =255;
    }

    display(){
        //console.log(this.body.speed);

        if(this.body.speed<3.5){
            push();
                fill("red");
                translate(this.body.position.x,this.body.position.y);
                rotate(this.body.angle);
                rect(0,0,this.w,this.h);
            pop();
        }
        else{

            World.remove(myWorld,this.body);
            /*push();
                this.visibility=this.visibility-5;
                //tint(255,this.visibility);
                //rect(this.body.position.x,this.body.position.y,this.w,this.h);
            pop();*/
        }
    }
}