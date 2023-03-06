let loca = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180,250,250);
  
  //Main circle
  fill('lightblue');
  // circle (center X, center Y, diameter)
  ellipse(195,150,150,150);
 
  fill('white')
  rect(150,120,30,15);
  rect(205,120,30,15);
  
  //Nose
  ellipse(193,160,20,20);
  //Mouth
  arc(194, 180, 40, 40, 0, PI);
  
  //left eyebrow
  line(150, 110, 180,  110);
  //right eyebrow
  line(230, 110, 201,  110);
  
  textSize(30);
  fill('black');
  stroke(0,0,250);
  text('I AM',loca,50);
  
  textSize(30);
  fill('black');
  stroke(0,0,250);
  text('CONTENT',loca,275);
  
  loca = loca +1;
 
 
}