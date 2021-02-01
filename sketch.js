const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ground1;
var hammer1;
var stone1;
var rubber1;
var iron1;
var sand1,sand2,sand3,sand4,sand5;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground1= new ground(590,500,1500,20);
	hammer1= new hammer(10,50);
	stone1= new stone(700,320,50,50);
	rubber1= new rubber(300,450,37);
    iron1= new iron(200,30,50,20);
	sand1= new sand(500,480,10);
	sand2= new sand(515,480,10);
	sand3= new sand(530,480,10);
	sand4= new sand(545,480,10);
	sand5= new sand(560,480,10);
	
	//Engine.run(engine);
  
}


function draw() {
  background("green");
  Engine.update(engine);
  
  
 ground1.display();
 hammer1.display();
 stone1.display();
 rubber1.display();
 iron1.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 
 
 
 
 
 
 
 
 
 
 
  
}



