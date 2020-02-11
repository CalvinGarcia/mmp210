x =200



function setup () { 
	createCanvas (640,360);

}


function draw () {
	// SHAPES WITH X,Y coordinates and size
	background ('white');
	//ellipse(260,120,130);//head
	//arc(226,80,30,22,)
	//ellipse(226,80,30);//left eye
	//ellipse(236,100,30);//nose
	//ellipse()

	//curve(73,24,73,61,15,65,15,65);
	



	fill('blue');

	ellipse(x + 100,200,120,170,20);// head


	noStroke()
	fill('blue')
	ellipse(340,160,50,50,);//hair1
	ellipse(350,170,50,50);
	ellipse(354,180,50,50);
	ellipse(360,160,40,40);

	//ellipse(280,196,4,4)

	//head and eyes
	fill('white');
	stroke('black');
	ellipse(260,160,20,20,);//right eye
	ellipse(310,160,20,20,);//left eye
	fill('black')
	//arc(280,210,120,90,180,360,HALF_PI,OPEN)
	fill('white')
	ellipse(280,190,40,20,);//nose
	ellipse(280,220,10,10,);//mouth

	noFill();
	curve(300, 120, 300 ,110, 300, 80, 415, 65, 400, 215, 165, 156);
	curve(300, 120, 296 ,110, 300, 80, 415, 65, 400, 215, 165, 156);
	fill('black')
	rect(248,150,24,5);//eyebrow
	rect(298,150,24,5);//eyebrow

	line(245,240,242,250); //beard
	line(249,240,247,255);//beard
	line(251,245,249,259); //beard
	//arc(300,200,120,10,0,PI,);

	ellipse(266,160,8,8);//right eye
	ellipse(316,160,8,8);
}


// shapes that are only x,y points 
 
