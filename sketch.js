const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

const Constraint=Matter.Constraint;

let engine;
let world;

var tower;
var ground;
var cannon,angle;
var cannonball;

var balls=[];


var backImg;

function preload()
{
 backImg=loadImage("assets/background.gif");
}

function setup()
{
	createCanvas(1200,600);

	engine=Engine.create();
	world=engine.world;

	tower=new Tower(150,380,160,400);

	//ground=new Ground(200,490,500,30);

	angle= -PI/4;

	cannon=new Cannon(180,100,50,50,angle);

	cannonball=new CannonBall(cannon.x,cannon.y);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}

function draw()
{
	background("grey");
    image(backImg,0,0,width,height);

    Engine.update(engine);

	tower.display();
	//ground.display();
	cannon.display();
    
	for(var i=0; i<balls.length; i++)
	{
		showCannonBall(balls[i],i);
	}
	//cannonball.display();
}

function keyPressed()
{
	if(keyCode===DOWN_ARROW)
	{
		var cannonball=new CannonBall(cannon.x,cannon.y);
		balls.push(cannonball);
		
	}
}

function showCannonBall(ball,index)
{
	ball.display();
	if(ball.body.position.x>width || ball.body.position.y>height-50)
	{
     Matter.World.remove(world,ball.body);
	 balls.splice(index,1); 
	}
}

function keyReleased()
{
	if(keyCode==DOWN_ARROW)
	{
    balls[balls.length-1].shoot();
	}
}