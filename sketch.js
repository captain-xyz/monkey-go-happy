
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)

  
  monkey=createSprite(100,10,10,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  edges = createEdgeSprites()
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  
  score = 0;
}


function draw() {
  
background(255 );
  

stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);

stroke("black");
textSize(20);
fill("black");
score=Math.ceil(frameCount/frameRate())
text("Survival Time: " + score, 250, 50);

  
   if(ground.x<8){
   ground.x=ground.width/2;
 }

  if(keyDown("space")){
  monkey.velocityY= -12;
 }
 monkey.velocityY = monkey.velocityY + 0.8

score = score + Math.round(getFrameRate()/60);
  
  monkey.collide(edges);
  drawSprites();
}
  
function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(500,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     
    banana.lifetime = 180;
    
  
    
   
    FoodGroup.add(banana);
  }
function spawnObstacles() {
  
if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 300;
    
   
    obstacleGroup.add(obstacle);
  }
}
}