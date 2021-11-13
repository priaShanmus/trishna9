var movingRect,fixedRect;


var r1,r2,r3,r4




function setup() {
  createCanvas(800,800);
  movingRect = createSprite(200,200,50,50);
  fixedRect = createSprite(400,400,50,50);
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
  r1 = createSprite(100,50,30,80);
  r1.shapeColor = "red";
  r2 = createSprite(200,50,30,80);
  r2.shapeColor = "red";
  r3 = createSprite(300,50,30,80);
  r3.shapeColor = "red";
  r4 = createSprite(400,50,30,80);
  r4.shapeColor = "red";
}

function draw() {
  background("lime"); 
  movingRect.x = mouseX;
  movingRect.y  = mouseY;
if(touching(movingRect,r4)){
movingRect.shapeColor = "blue";
r4.shapeColor = "blue";
}
  else{
movingRect.shapeColor = "red";
r4.shapeColor = "red";
  }



    drawSprites();
}
