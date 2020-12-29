class rock{
    constructor(x,y,w,h,img){
        var options = {
            restitution : 0.2,
            friction : 0.5
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.image = img;
        this.w = w;
        this.h = h;
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}