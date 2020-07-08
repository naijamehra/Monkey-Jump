//Global Variables
var bananaimg, obstacleimg, obstaclegroup, bananagroup, 
 backimg, score, monkey,monkeyimg, ground; 

function preload(){
  backimg = loadImage("jungle.jpg");
  groundIMG = loadImage("ground.png");
  
  monkeyimg =   loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",  "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.pn   g","Monkey_08.png","Monkey_09.png","Monkey_10.png" );
  
  bananaimg = loadImage("Banana.png");
  obstacleimg = loadImage("stone.png");
}


function setup() {
  createCanvas(400,400);
  
  //background = createSprite(300,300,20,20);
  background.addImage("b", backimg);
  
  monkey = createSprite(55,340,20,50);
  monkey.addAnimation("m", monkeyimg);
  
  ground = createSprite(200,380,400,10);
  ground.addImage("g", groundimg);
  ground.x = ground.width /2;
  ground.velocityY =-3;
  ground.visible = false;
}


function draw(){
 background(255); 
  
  if (KeyDown(space)) {
       monkey.velocityY = -12 ;
  }    
  
  mon.velocityY = mon.velocityY + 0.6;
   
   mon.collide(invisibleground);
   
   food();
   obstacles();
  
 drawSprites(); 
}

function food() {
 if (World.frameCount%80===0) {
    var banana = createSprite(400,220,10,40);
    banana.y = randomNumber(200,280);
    banana.setAnimation("Banana");
    banana.scale = 0.06;
    banana.velocityX = -3;
    
    banana.lifetime = 134;
    
    banana.depth = mon.depth;
    banana.depth = mon.depth + 1;
    
    bananaGroup.add(banana); 
 }
}

function obstacles() {
  if (World.frameCount%300===0) {
    var ob = createSprite(400,370,10,40);
    //ob.y = randomNumber(220,285);
    ob.setAnimation("Stone");
    ob.scale = 0.15;
    ob.velocityX = -3;
    
    ob.lifetime = 134;
    
    ob.depth = mon.depth;
    ob.depth = mon.depth + 1;
    
    obstaclesGroup.add(ob);
    
  }
}

