var bg 
var player
function preload(){
  bg = loadImage("Images/ocean.jpg")
}

function setup() {
  createCanvas(1200,400);
  player = new Player(200,200,50,50)
}

function draw() {
  background(bg);  
  player.display();
}