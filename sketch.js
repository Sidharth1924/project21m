
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= new ball(100, 600, 10);

  ground = new Ground(400, 680, 5000, 20);
  
  leftSide = new side(1390, 620, 20, 100);
  bottom = new side(1450, 660, 100, 20);
  rightSide = new side(1500, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  ball.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:35, y: -16})
  }
}







