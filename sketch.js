
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	var option = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here..
	boy = createSprite(100, 530, 20, 20);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	ground = new Ground(400, 600, width, 10);

	tree = new Tree(670, 500, 10, 10);

	stone = new Stone(45, 470, 20, 20);

	mango1 = new Mango(600, 255, 10, 10);
	mango2 = new Mango(600, 255, 10, 10);
	mango3 = new Mango(600, 255, 10, 10);
	mango4 = new Mango(600, 255, 10, 10);
	mango5 = new Mango(600, 255, 10, 10);
	mango6 = new Mango(600, 255, 10, 10);

	object = Bodies.rectangle(45, 470, 10, 10, option);
	World.add(world, object);

	catapult = new Slingshot(stone.body, {x:45, y:470});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(150);

  textSize(20);
  text(mouseX, 200, 50);
  text(mouseY, 250, 50);

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 10, 10);
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  catapult.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  drawSprites();
 
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
    catapult.fly();
}

function keyPressed(){

	if(keyCode === 32){
	
	  Matter.Body.setPosition(stone.body, {x:45,y:470})
	  launcherObject = new Slingshot(stone.body,{x:45,y:470});
	}
	
}