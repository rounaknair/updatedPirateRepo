class Cannon
{
    constructor(x,y,w,h,angle)
    {
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.angle=angle;
    }
display()
{
 if(keyIsDown(RIGHT_ARROW) && this.angle<0.35)
{
this.angle += 0.1;
}
if(keyIsDown(LEFT_ARROW) && this.angle>-1.45)
{
this.angle -=0.1;
}

 fill("grey");
 push();
 translate(this.x,this.y);
 rotate(this.angle);
 rect(0,0,this.w+70,this.h);
 pop();
 arc(this.x-30,this.y+90,75,100,PI,TWO_PI);
 noFill();
}
}