const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myWorld,myEngine,poly_img,backgroundImg;
var mainground,ground1,ground2,slingbody,chain1;
var box1 = [];
var box2 = [];

function preload(){
    getBackgroundImage();
    poly_img=loadImage("polygon.png");
}

function setup(){
    createCanvas(1100,500);
    rectMode(CENTER);
    angleMode(RADIANS);
    //imageMode(CENTER);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground1 = new ground(500,400,350,10);
    ground2 = new ground(900,250,350,10);
    mainground = new ground(550,480,1100,10);

    var xpos=420;
    var ypos = 380;
    for (var i=5;i>0;i--){
        var z=xpos;
        for(var j=0;j<i;j++){
            box1.push(new box(xpos,ypos,40,40));
            xpos = xpos+40;
        }
        xpos=z+20;
        ypos = ypos-40;
    }

    var xpos=820;
    var ypos = 230;
    for (var i=5;i>0;i--){
        var z=xpos;
        for(var j=0;j<i;j++){
            box2.push(new box(xpos,ypos,40,40));
            xpos = xpos+40;
        }
        xpos=z+20;
        ypos = ypos-40;
    }

    slingbody = new rock(250,200,40,40,poly_img);

    chain1 = new sling(slingbody.body,{x:250,y:200});


}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
    textSize(30);
    fill("white");
    text("Press Space to hit again",300,50);

    Engine.update(myEngine);

    ground1.display();
    ground2.display();
    mainground.display();

    for(i=0;i<box1.length;i++){
        box1[i].display();
    }

    for(i=0;i<box2.length;i++){
        box2[i].display();
    }

    slingbody.display();

    chain1.display();
}

function mouseDragged(){
    Body.setPosition(slingbody.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    chain1.rel();
}

function keyPressed(){
    if(keyCode===32){
        Body.setPosition(slingbody.body,{x: 250, y: 200});
        chain1.attach(slingbody.body);
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "light.jpg";
    } else {
      bg = "dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }