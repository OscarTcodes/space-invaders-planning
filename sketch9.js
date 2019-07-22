let player = {
  shipX: 525,
  shipY: 600
};

rectHeight = 50;
rectWidth = 50;

function setup() {
  createCanvas(1100, 700);
}

function movement() {
  if (keyIsDown(LEFT_ARROW)) {
    player.shipX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.shipX += 5;
  }
}

function borders() {
  if (player.shipX + rectWidth > 1100) {
    player.shipX = 1050;
    movement();
  } else if (player.shipX < 0) {
    player.shipX = 0;
    movement();
  } else movement();
}

function draw() {
  background(10, 2, 2);
  fill(255, 255, 255);
  rect(player.shipX, player.shipY, rectWidth, rectHeight);
  borders();
  ellipse(alien.craftX, alien.craftY, 30, 30);
 // alien_borders();
}
let alien = {
  craftX: 550,
  craftY: 30
};
let speed = 5
function alienShip(){
     if (alien.craftX > width ){
            speed = -5
            alienMovement()
     }
    alien.craftX = alien.craftX+ speed;

}

function alienMovement(){



    
}