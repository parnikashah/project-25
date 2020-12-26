
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,ball1;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
   
	
	
	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(1000,653,20,80);
	
  ball1=new Ball(110,650,70);
  
  
  myGround= new Ground(600,660,1200,10);
	

  
}


function draw() {
 
  background("white");

  Engine.update(engine);

  dustbin1.display();

  myGround.display();
  ball1.display();
 
}
    
function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:112,y:-101});
	}  
 
}



