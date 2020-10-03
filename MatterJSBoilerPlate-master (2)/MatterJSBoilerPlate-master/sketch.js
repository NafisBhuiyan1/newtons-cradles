
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob, bob2, bob3, bob4, bob5
var chain, chain2, chain3, chain4, chain5
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(200,200,50)
	console.log(bob);

	bob2 = new Bob(100,200,50)
	console.log(bob2);

	bob3 = new Bob(300,200,50)
	console.log(bob2);

	bob4 = new Bob(400,200,50)
	console.log(bob2);

	bob5 = new Bob(500,200,50)
	console.log(bob2);

	ground = Bodies.rectangle(400,150,650,50, {isStatic:true} );
	World.add(world, ground)

	Engine.run(engine);
	chain = new Chain(bob.body,{x:200,y:150});
	chain2 = new Chain(bob2.body,{x:100,y:150});
	chain3 = new Chain(bob3.body,{x:300,y:150});
	chain4 = new Chain(bob4.body,{x:400,y:150});
	chain5 = new Chain(bob5.body,{x:500,y:150});
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
  rect(ground.position.x, ground.position.y, 650,50)
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
}
function keyPressed(){
if(keyCode===(UP_ARROW)){
Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-900, y:-900})
}
}



