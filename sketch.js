var sprite1, sprite2;

function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(100, 100, 50, 50);
  sprite1.shapeColor = "red";
  sprite2 = createSprite(300, 300, 50, 50);
  sprite2.shapeColor = 'cyan';
}

function draw() {
  background(255,255,255);  
  drawSprites();

  sprite1.x = mouseX;
  sprite1.y = mouseY;

  if (sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2 && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2
    && sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2 && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2) {
      sprite1.shapeColor = 'purple';
      sprite2.shapeColor = 'lime';

  } else {
    sprite1.shapeColor = 'cyan';
    sprite2.shapeColor = 'red';
  }

}