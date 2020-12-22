
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var bob1,bob2,bob3, bob4,bob5, roofObj
var rope1,rope2,rope3, rope4,rope5;
var world;
var canvas, mConstraint;


function setup() {
	canvas = createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	//create a mouse that is attached to p5 canvas

	var canvasmouse = Mouse.create(canvas.elt); 

	//All normal HTML methods can be called on this .elt
	//display is high density
	console.log(canvasmouse)
	console.log(pixelDensity())
	//Sets the pixel scaling for high pixel density displays
	canvasmouse.pixelRatio = pixelDensity();


	//Mouse constraints are used for allowing user interaction, 
	//providing the ability to move bodies via the mouse or touch

	// When a web page is loaded, the browser creates a Document Object Model of the page

	var options = {
	mouse : canvasmouse
	  };
	  mConstraint = MouseConstraint.create(engine, options);
	  World.add(world, mConstraint);

	




	roofObj=new roof(width/2,height/4,width/4,20);

	bobDia=40;

	startBobPosX=width/2;
	startBobPosY=height/2;

	bob1=new bob(startBobPosX-(bobDia*2),startBobPosY,bobDia);

	bob2=new bob(startBobPosX-bobDia,startBobPosY,bobDia);

	bob3=new bob(startBobPosX,startBobPosY,bobDia); // ref bob

	bob4=new bob(startBobPosX+bobDia,startBobPosY,bobDia);

	bob5=new bob(startBobPosX+(bobDia*2),startBobPosY,bobDia);
	

	

	rope1=new rope(bob1.body,roofObj.body,-bobDia*2, 0)

	rope2=new rope(bob2.body,roofObj.body,-bobDia*1, 0)

	rope3=new rope(bob3.body,roofObj.body,0, 0)  //ref rope

	rope4=new rope(bob4.body,roofObj.body,bobDia*1, 0)

	rope5=new rope(bob5.body,roofObj.body,bobDia*2, 0)

	// var options = {
	// body: bob1
	//   };
	//   mConstraint = MouseConstraint.create(engine, options);
	//   World.add(world, mConstraint);

	
	Engine.run(engine);
  
}


function draw() {
 
  background('yellow');
  rectMode(CENTER);
  roofObj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
}

// function keyPressed() {
//   	if (keyCode === UP_ARROW) {

//     	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

//   	}
// }



// function mouseDragged() {
// 	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
	
//   }
  

