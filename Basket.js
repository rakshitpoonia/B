class Basket{
    constructor(x,y){
this.basket=Bodies.rectangle(x,y,this.width,this.height);
this.width=20;
this.height=90;
this.image=loadImage("stand1.png");

World.add(world,this.basket);
 
}
display(){
    push();
    imageMode(CENTER);
    image(this.image,displayWidth-1100,displayHeight-905);
    image(basketimg,displayWidth-1050,displayHeight-640);
    pop();
}
}