var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy1,boyImg,huddles1,stone1
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
boy1Img =   loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png");
  stone1 = loadImage("stone1.png")
  huddles1 = loadImage("huddles1.png")
// trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("junglebackground.jpg");

  
  
  
  
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(800, 600);
  
 
  
  
  boy1=createSprite(50,180,20,20)
  boy1.addAnimation("running",boy1Img)
  boy1.scale =.5
  
  // ground = createSprite(200,420,800,600);
  // ground.addImage("ground",groundImage);
  // ground.x = ground.width /2;
  // ground.velocityX = -(6 + 3*score/100);
  // ground.scale=2

  
  // gameOver = createSprite(300,100);
  // gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 // gameOver.scale = 0.5;
  restart.scale = 0.5;

  //gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(groundImage);
  text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && boy1.y >= 159) {
      boy1.velocityY = -12;
    }
  
    boy1.velocityY = boy1.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    boy1.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    // if(obstaclesGroup.isTouching(boy1)){
    //     gameState = END;
    // }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    boy1.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
   
    
    //set lifetime of the game objects so that they are never destroyed
    // obstaclesGroup.setLifetimeEach(-1);
    // cloudsGroup.setLifetimeEach(-1);
    
    // if(mousePressedOver(restart)) {
    //   reset();
    // }
  }
  
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  // if (frameCount % 60 === 0) {
  //   var cloud = createSprite(600,120,40,10);
  //   cloud.y = Math.round(random(80,120));
  //   cloud.addImage(cloudImage);
  //   cloud.scale = 0.5;
  //   cloud.velocityX = -3;
    
     //assign lifetime to the variable
  //   cloud.lifetime = 200;
    
  //   //adjust the depth
  //   cloud.depth = trex.depth;
  //   trex.depth = trex.depth + 1;
    
  //   //add each cloud to the group
  //   cloudsGroup.add(cloud);
  // }
  
}

function spawnObstacles() {
  // if(frameCount % 60 === 0) {
  //   var obstacle = createSprite(600,165,10,40);
  //   //obstacle.debug = true;
  //   obstacle.velocityX = -(6 + 3*score/100);
    
  //   //generate random obstacles
  //   var rand = Math.round(random(1,6));
  //   switch(rand) {
  //     case 1: obstacle.addImage(obstacle1);
  //             break;
  //     case 2: obstacle.addImage(obstacle2);
  //             break;
  //     case 3: obstacle.addImage(obstacle3);
  //             break;
  //     case 4: obstacle.addImage(obstacle4);
  //             break;
  //     case 5: obstacle.addImage(obstacle5);
  //             break;
  //     case 6: obstacle.addImage(obstacle6);
  //             break;
  //     default: break;
  //   }
    
    //assign scale and lifetime to the obstacle           
  //   obstacle.scale = 0.5;
  //   obstacle.lifetime = 300;
  //   //add each obstacle to the group
  //   obstaclesGroup.add(obstacle);
  // }
}


