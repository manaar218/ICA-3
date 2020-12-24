let building = [];
let img;

function preload(){
  img = loadImage('assets/car1.png');
}

function setup() {
  createCanvas(600, 400)

  for (var i = 0; i < 10; i++) { // building count
    building[i] = new Building();
  }
}

function draw() {
  background(11, 39, 158); // sky
  
  fill('white');
  ellipse(100, 50, 50); // crescent moon
  
  fill(11, 39, 158);
  ellipse(110, 50, 50); // hidden part of the moon

  noStroke();

  for (i = 0; i < 10; i++) { // buildings
    building[i].display();
    building[i].update();
  }
}

class Building {
  constructor() {
    
    this.w = random(20, 50); // building width
    this.h = random(90, 140); // building height
    
    this.x = random(width); // x co-ordinate
    this.y = random(230, 260); // y co-ordinate
    
    this.opacity = random(50, 200);
  }

  display() {

    fill(color(89, 165, 212, this.opacity));
    rect(this.x, this.y, this.w, this.h); // buildings

    fill(0);
    rect(0, 330, width, 70); // road

    fill(214, 200, 107);
    image(img, 100, 210, 200, 200); // car  
    
  

    fill(45, 46, 45); // wheels - back
    ellipse(143, 323, 30);
    ellipse(255, 323, 30);
  }
  
  update() {
    
    this.x = this.x + 3; // for buildings to move across the screen

    if (this.x > width) {
      this.x = 0;
    }
  }}
