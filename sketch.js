function setup() {
  createCanvas(windowWidth, windowHeight);
  // Move the mouse across the canvas
}


  

function draw() {
  
  fill(0,300,0, 200);
  ellipse (mouseX, mouseY, random(255), random(255));
   line(mouseX, 0, mouseX, 1000);
   fill(177)
  rect(mouseY, 0, mouseY,1000);
  fill(32)
  rect(330,mouseY,530,mouseY)
  
}

function mousePressed () {
  noFill()
   background (200,0,200);
  fill(255)
  background(244, 248, 252);
 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
  


