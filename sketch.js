const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingplatform;
var platform1, platform2,platform3;
var box1,box2,box3,box4,box5,box6;
var striker;
var slingshot;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    slingplatform = new Ground(300,500,400,100);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    platform1 = new Log(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(700,160,70,70);
    box6 = new Box(920,160,70,70);
    platform2 = new Log(810,180,300,PI/2);
    striker = new Striker(280,350);
    slingshot = new Slingshot(striker.body,{x:300,y:350});
}

function draw(){
    Engine.update(engine);
    background(0);
    push();
    noStroke();
    ground.display("#000099");
    slingplatform.display("#990099");
    platform1.display("#4d0039");
    platform2.display("#4d0039");
    box1.display("#ff0000");
    box2.display("#ff0000");
    box3.display("#ff5500");
    box4.display("#ff5500");
    box5.display("#ffff00");
    box6.display("#ffff00");
    striker.display("#00ff00");
    slingshot.display();
    
}

function mouseDragged(){
    slingshot.drag();
}

function mouseReleased(){
    slingshot.fly();
}

