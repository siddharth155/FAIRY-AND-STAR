var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairySound;

//create variable for fairy sprite and fairyImg





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairy.png","images/fairyImage1.png","images/fairyImage2.png");
	fairySound=loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy=createSprite(130,520);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale=0.2;


	//write code to play fairyVoice sound
	fairySound.play();

	//create fairy sprite and add animation for fairy

	
	



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y>470 && starBody.position.y>470){
	  Matter.body.setStatic(starBody,true);
  }

  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+20
	}

	//writw code to move fairy left and right
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-5

	}


	
}
