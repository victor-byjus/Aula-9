var caixa;
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    caixa.x += 5;
  }
  if(keyDown("left")){
    caixa.x -= 5;
  }
  if(keyDown("down")){
    caixa.y += 5;
  }
  if(keyDown("up")){
    caixa.y -= 5;
  }
  drawSprites();
}




