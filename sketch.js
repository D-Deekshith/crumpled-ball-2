
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,dustBin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,678,62,60);

  ground = new Ground(400,680,800,5);
  dustBin = new Box(630,628,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);

  Engine.update(engine);

  ground.display();
  dustBin.display();
  keyPressed();
  keyPressedOver();

  if(paper.body.position.x>=dustBin.body.position.x-30 && paper.body.position.x<=dustBin.body.position.x+30){
    paper.body.restitution=0;
    paper.body.isStatic="true";
    dustBin.body.restitution=0;
    dustBin.body.isStatic="true";
  }
  else{
   paper.display();   
  }
}

