
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,groundObject   
    var world;
function preload()

{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new paper(200,450,40);
    groundObject=new ground(width/2,670,width,20);
    //Create a Ground
 
    
    boxPosition=width/2-100
    boxY=610;
 
 
    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
 
    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);
 
    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color(255,0,0);
 
    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);
 
    boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxrightSprite.shapeColor=color(255,0,0);
 
    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();


  
  drawSprites();
 
}
 
function keyPressed() {
    if (keyCode === UP_ARROW) {
 
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
    }
}
 
 





