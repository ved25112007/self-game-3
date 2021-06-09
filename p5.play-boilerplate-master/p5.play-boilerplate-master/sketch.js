var bgImg;
var ninja,ninjaImg;
var monster,monster2,monster3,monsterImg,monster2Img,monster3Img
var star,starImg;
var ninja_star, ninja_starImg;
var ninja_starGroup;

function preload(){
  ninjaImg = loadAnimation("images/ninja1.png", "images/ninja2.png","images/ninja3.png" , "images/ninja4.png","images/ninja5.png", "images/ninja6.png", "images/ninja7.png", "images/ninja8.png", "images/ninja9.png" );
  
  bgImg=loadImage("images/bg.jpg")
  monsterImg=loadImage("images/monster.png");
  monster2Img=loadImage("images/monster2.png");
  monster3Img=loadImage("images/monster3.png");
  ninja_starImg=loadImage(" images/ninjastar.png");

}
function setup() {
  createCanvas(1200,900);

 ninja=createSprite(400, 340, 50, 50);
 ninja.addAnimation("abc", ninjaImg)
 ninja.scale=0.3

 ninja_starGroup = new Group();

 monster=createSprite(400,500,50,50);
 monster.addImage(monsterImg);
 monster.scale=0.3
 monster.velocityX=3
 monster.velocityY=4

 monster2=createSprite(600,320,50,50);
 monster2.addImage(monster2Img);
 monster2.scale=0.3
 monster2.velocityX=-4
 monster2.velocityY=-2

 monster3=createSprite(360,750,50,50);
 monster3.addImage(monster3Img);
 monster3.scale=0.4
 monster3.velocityX=5
 monster3.velocityY=-3

 
}

function draw() {
  background(bgImg);
  
 ninja.x=mouseX;
 ninja.y=mouseY;

 edges= createEdgeSprites()

  monster.bounceOff(edges)
  monster2.bounceOff(edges)
  monster3.bounceOff(edges)

// move ninja_star in all 4 direction 
if(keyWentDown("right")){
  
  spawnStar()
  ninja_star.velocityX=8
  
}
if(keyWentDown("left")){
  spawnStar()
  ninja_star.velocityX=-8
}
if(keyWentDown("down")){
  spawnStar()
  ninja_star.velocityY=8
}
if(keyWentDown("up")){
  spawnStar()
  ninja_star.velocityY=-8
}

//destroying monster1
if(monster.isTouching(ninja_starGroup)) {
  monster.destroy();
}
if(monster2.isTouching(ninja_starGroup)) {
  monster2.destroy();
}if(monster3.isTouching(ninja_starGroup)) {
  monster3.destroy();
}
//destroying monster2
//destroying monster3

  drawSprites();
}

function spawnStar(){
 
ninja_star=createSprite(0,0,20,20)
ninja_star.x=ninja.x;
ninja_star.y=ninja.y;
ninja_star.addImage(ninja_starImg)
ninja_star.scale = 0.1
ninja_starGroup.add(ninja_star);
  

}