function setup () { 
	createCanvas (640,360);

}

function draw () {
	// SHAPES WITH X,Y coordinates and size
	background (200,300,88);
		ellipse(380,180,60,60); //ponytail
	ellipse(320,180 , 100);// face 
	//rectMode(CENTER)

	noFill();
	stroke('red');
	strokeWeight("5");
	ellipse(310,160,20);

	//fill('blue')
	ellipse(280,160,20);

	rect(280,180, 40,20,10);
	arc(360,180,20,40,HALF_PI, HALF_PI);

triangle(150, 70, 180, 100, 220, 60);

}

// shapes that are only x,y points 
 
