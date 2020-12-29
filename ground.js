class ground{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.w = w;
        this.h = h;
    }

    display(){
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}