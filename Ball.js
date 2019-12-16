class Ball{
constructor(x,y){
    var options={
        'restitution':1.5,
        'friction':0.3,
        'density':0.5
    }
    this.ball=Bodies.rectangle(x,y,50,50,options);
    this.height=50
    this.width=50;
    
    World.add(world,this.ball);
    this.image=loadImage('basketball.png');
    
}
display(){
    push();
    var angle=this.ball.angle;
    translate(this.ball.position.x,this.ball.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

}

}