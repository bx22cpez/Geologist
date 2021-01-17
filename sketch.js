
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(300,300);
	ground = new Ground(400,height,800,20);
	stone = new Stone(300,300,100,100);
	rubber = new Rubber(400,400,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
 

 
 
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



