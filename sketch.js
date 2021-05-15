const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var background,snow
var engine, world;
var snowArr = [];

function preload()
{
  bg = loadImage("snow3.jpg")
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  
  
  if(frameCount % 150 === 0){

    for(var i=0; i<50; i++){
        snowArr.push(new Snow(random(0,800), 10,40));
    }

  }
  
  
}

function draw() {
  Engine.update(engine);
  background(bg);
  
  
  for(var i = 0; i<50; i++){
    snowArr[i].display();
    snowArr[i].updateY()
    
  }

  drawSprites();

 
}