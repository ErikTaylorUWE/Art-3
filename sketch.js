// arrays for the X,Y of each bee
let Xs = [];
let Ys = [];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-frame');
  background(220);
  // create 40 bees, at random positions
  for (let i = 1; i < 40; i++) {
    Xs[i] = random(width);
    Ys[i] = random(height);
  }
}

function draw() {
  
  // stop when a particular bee is within the doorway 
  if (abs(Xs[0] - width/2) < 10) {
    noloop();
    return;
  }
  background(135,206,235);

  // set the size of each bar of the hive
  let d = 20;
  // and create the hive
  for (let i = d; i<=4*d; i+=d) {
    rect(width/2-5*d+i, height/2-i, 10*d-i*2, d);
    rect(width/2-5*d+i, height/2+i-d, 10*d-i*2, d);
  }

  // draw the doorway in black
  fill(0);  
  ellipse(width/2, height/2, 30,30);
  
  // move each bee towards the doorway, by a percentage of its remaining distance 
  for (let i = 0; i<=40; i++) {
    Xs[i] += (width/2 - Xs[i]) / 100;
    Ys[i] += (height/2 - Ys[i]) / 100;
    // if it is now well within the doorway, make it tiny
    if (abs(Xs[i] - width/2) + abs(Ys[i]-height/2) < 10) {
      ellipse(Xs[i], Ys[i], 2, 1);
    } else{
      fill(255,204,0);
      ellipse(Xs[i], Ys[i], 20, 10);
    }
  }
}
