var box;

function setup() {
  createCanvas(1000,1000);

   box = createSprite(500,500,30,30);

  
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW))
  {
box.position.x = box.position.x+5;

  }
  
  if (keyIsDown(LEFT_ARROW))
  {
box.position.x = box.position.x-5;
  }



drawSprites();
}


