class CannonBall
{
    constructor(x,y)
    {
     var cannonOptions=
     {
         friction:1.0,
         restitution:0.9,
         density:1.0,
     }
     this.r=20;
     this.body=Bodies.circle(x,y,this.r,cannonOptions);
     this.image=loadImage("assets/cannonball.png");
     World.add(world,this.body);
    }

    display()
    {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,50,50);
    pop();
    } 

    shoot()
    {
     var velocity=p5.Vector.fromAngle(cannon.angle);
     velocity.mult(20); 
     Matter.Body.setStatic(this.body,false);
     Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }  
}