var FixRec;
var MovRec;

function setup() {
  createCanvas(800,400);

  FixRec=createSprite(400, 200, 50, 100);
  MovRec=createSprite(200,200,100,50)

  MovRec.shapeColor='Green'
  FixRec.shapeColor='Green'


  

}

function draw() {
  background(255,255,255);  


  MovRec.x=mouseX
MovRec.y=mouseY

if((FixRec.x-MovRec.x<FixRec.width/2+MovRec.width/2)
&&(MovRec.x-FixRec.x<MovRec.width/2+FixRec.width/2)
&&(FixRec.y-MovRec.y<FixRec.height/2+MovRec.height/2)
&&(MovRec.y-FixRec.y<FixRec.height/2+MovRec.height/2)){
  FixRec.shapeColor="red"
  MovRec.shapeColor="red"
}

else{
  FixRec.shapeColor="green"
  MovRec.shapeColor="green"
}

  drawSprites();

}