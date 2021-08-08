var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("mahabharat1.jpg");
  bg2 = loadImage("treasure1.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 4) {
    clear()
    background(bg2)
    fill("rgb(255, 0, 0)")
    textSize(50);
    text("You Won",250, 200);
  }

  drawSprites()
}