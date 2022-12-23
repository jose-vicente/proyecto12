var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("path.png")

  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG", "Jake5.png");

}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200, 200);
 path.addImage(pathImg);
 path.scale=1.2;
 path.velocityY = 4;

//crear sprite de boy (niño)
boy = createSprite (180, 340, 30, 30);
boy.addAnimation("jakeRunning", boyImg);
boy.scale=0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
