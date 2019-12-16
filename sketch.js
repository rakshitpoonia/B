const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;

var engine,world,ball,ground,launcher,basketimg,stand,ball,background,basket,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
function preload(){
basketimg=loadImage("hoop.png");
ball=loadImage("basketball.png");

backgroundimg=loadImage("background.png");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine=Engine.create();
  world=engine.world;
   ball=new Ball(displayWidth-200,displayHeight-400);
   ground=new Ground(0,displayHeight-250);
   launcher=new Launcher(ball.body,{x:displayWidth-50,y:displayHeight-400});
   console.log(this.ball);
   basket=new Basket(displayWidth-1430,displayHeight-717);
   ball1=createSprite(displayWidth-150,displayHeight-196,50,50);
   ball2=createSprite(displayWidth-230,displayHeight-196,50,50);
   ball3=createSprite(displayWidth-310,displayHeight-196,50,50);
  


}

function draw() {
  background(backgroundimg);

  Engine.update(engine);  
  ball.display();
  ground.display();
  basket.display();
  launcher.display();
  drawSprites();
}