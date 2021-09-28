const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var bg;
var zombie;
var box1,box2,box3,box4,box5,box6;
var ladder1,ladder2;
var door;
var hero;

function preload() {
    bg=loadImage("background2.png");
    box1=loadImage("box.png");
    zombie=loadAnimation("zombie_House/zo_Images/zo1.png","zombie_House/zo_Images/zo2.png","zombie_House/zo_Images/zo3.png","zombie_House/zo_Images/zo4.png","zombie_House/zo_Images/zo5.png","zombie_House/zo_Images/zo6.png","zombie_House/zo_Images/zo7.png","zombie_House/zo_Images/zo8.png");
    ladder1=loadImage("ladder.png");
    ladder2=loadImage("ladder.png");
    door=loadImage("door.gif");
   
}

function setup(){
    var canvas = createCanvas(windowWidth-10,windowHeight-10);
    engine = Engine.create();
    world = engine.world;

    zombie = new Zombie(windowWidth-400,windowHeight-400,40,150);
  
    box1 = new Box(windowWidth-1650,windowHeight-100,60,60);
    box2 = new Box(windowWidth-250,windowHeight-100,60,60);
    box3 = new Box(windowWidth-1650,windowHeight-400,60,60);
    box4 = new Box(windowWidth-250,windowHeight-400,60,60);
    box5 = new Box(windowWidth-1650,windowHeight-650,60,60);
    box6 = new Box(windowWidth-250,windowHeight-650,60,60);

    ground1 = new Ground(windowWidth/2+90,windowHeight-615,1800,20);
    ground2 = new Ground(windowWidth/2-60,windowHeight-300,1840,20);
 // ground2 = new Ground(windowWidth/2-60,windowHeight-300,1800,20);
    ground3 = new Ground(windowWidth/2,windowHeight-20,2000,20);

    ladder1 = new Ladder(windowWidth-100,windowHeight-30,70,240);
    ladder2 = new Ladder(windowWidth/2-840,windowHeight-300,70,280);

    door = new Door(windowWidth-80,windowHeight-675,60,100);

    hero = new Hero(windowWidth-1890,windowHeight-170,70,150);
 // hero = new Hero(windowWidth-1880,windowHeight-170,70,150);

    console.log(windowWidth);

    Engine.run(engine);
}

function draw(){
    background(bg);

    zombie.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ground1.display();
    ground2.display();
    ground3.display();

    ladder1.display();
    ladder2.display();

    door.display();

    hero.display();

  //  controllingZombie();
}

function keyPressed(){
     // if(keyDown("right_arrow")){


  
      //   }
  
     //     if(keyCode === 39){
              
     //       hero.x =  hero.x - 5;
             
     //     } 
  
  }
/* function controllingZombie(){
     zombie.velocityX = -2;
    if(keyIsDown("left_arrow")){
        zombie.x -= 5;
    }

    if(keyIsDown("right_arrow")){
    zombie.x += 5;
    }
 }
  */

