function setup() {
	createCanvas(800, 800);
	leg0 = new Moving(createVector(random(-50, -200), random(-50, -200)));
	leg1 = new Moving(createVector(random(-50, -200), random(50, 200)));
	leg2 = new Moving(createVector(random(50, 200), random(50, 200)));
	leg3 = new Moving(createVector(random(50, 200), random(-50, -200)));
    leg4 = new Moving(createVector(random(-75, 75), random(-75, 75)));
	leg5 = new Moving(createVector(random(-200, -75), random(-200, -75)));
	leg6 = new Moving(createVector(random(75, 200), random(75, 200)));
	leg7 = new Moving(createVector(random(-75, -75), random(-75, -75)));
	// leg4 = new Moving(createVector(random(-150, -300), random(-150, -300)));
	// leg5 = new Moving(createVector(random(-150, -300), random(150, 300)));
	// leg6 = new Moving(createVector(random(150, 300), random(150, 300)));
	// leg7 = new Moving(createVector(random(150, 300), random(-150, -300)));
	frameRate(20);
}

function preload() {
	img0 = loadImage("Images/Untitled-1.jpg");
  	img1 = loadImage("Images/spider body.png");
	BG0 = new Background(img0);
    
}

function draw() {
	background(220);
	BG0.render();
  
    leg0.shadow();
    leg1.shadow();
	leg2.shadow();
	leg3.shadow();
	leg4.shadow();
	leg5.shadow();
	leg6.shadow();
	leg7.shadow();
  
	leg0.render();
	leg1.render();
	leg2.render();
	leg3.render();
	leg4.render();
	leg5.render();
	leg6.render();
	leg7.render();
  
    leg0.body2(img1);


}