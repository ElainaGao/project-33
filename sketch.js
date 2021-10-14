var bg, bgImg
var snow, snowImg

function preload(){
bgImg = loadImage("snow1.jpg")
snowImg = loadImage("snowflake.png")
}



function setup() {
  createCanvas(800,400);
bg = createSprite(400, 200, 50, 50);
snow1 = createSprite(400,20,20,20);
snow2 = createSprite(200,20,20,20);
snow3 = createSprite(500,20,20,20);
snow4 = createSprite(275,20,20,20);
snow5 = createSprite(150,20,20,20);
snow6 = createSprite(600,20,20,20);
bg.addImage(bgImg)
snow1.addImage(snowImg)
snow2.addImage(snowImg)
snow3.addImage(snowImg)
snow4.addImage(snowImg)
snow5.addImage(snowImg)
snow6.addImage(snowImg)
snow1.scale = 0.04
snow2.scale = 0.04
snow3.scale = 0.04
snow4.scale = 0.04
snow5.scale = 0.04
snow6.scale = 0.04
}

function draw() {

snow1.velocityY = 6
snow2.velocityY = 4
snow3.velocityY = 5
snow4.velocityY = 4
snow5.velocityY = 1
snow6.velocityY = 3





  background(0);  
  drawSprites();
}