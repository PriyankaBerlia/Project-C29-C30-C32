class sling{
    constructor(body1,point1){
        var options = {
            bodyA : body1,
            pointB : point1,
            length : 1,
            stiffness : 0.04
        }

        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
    }

    display(){
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
    }

    rel(){
        this.chain.bodyA=null;
    }

    attach(body2){
        this.chain.bodyA = body2;
    }
}