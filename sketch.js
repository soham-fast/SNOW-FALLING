const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snows=[];


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
if(frameCount%60===0){
  snows.push(new Snow(random(20,780),0,10,10))
}

 
 for(var i=0;i<snows.length;i++){
snow[i].display();
 }


  drawSprites();
}