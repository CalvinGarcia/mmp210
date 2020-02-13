var x = 200
var y = 100


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

	ellipse(x + 100, x ,y + 20,y + 70,20);// head

	
	noStroke()
	fill('blue')
	ellipse( x + 140, y + 60,y/2,y/2,);//hair1
	ellipse( x + 150, y + 70, y/2,y/2);
	ellipse( x + 154, y + 80,y/2,y/2);
	ellipse( x + 160, y + 60, 40, 40);

	//ellipse(280,196,4,4)

	//head and eyes
	fill('white');
	stroke('black');
	ellipse(x + 60, y + 60,y/5,y/5,);//right eye
	ellipse(x + 110,y + 60,20,20,);//left eye
	fill('black')
	//arc(280,210,120,90,180,360,HALF_PI,OPEN)
	fill('white')
	ellipse(x + 80,y + 90,y-60,y-80);//nose
	ellipse(x + 80,x + 20,10,10,);//mouth

	noFill();
	curve(x + y, y + 20, x + y ,y + 10, x + y, 80, x + x + 15,y-35 , x + x, x + 15, y + 65, y + 56);
	curve(x + y, y + 20, x + 96 ,y + 10, x + y, y - 20, (x * 2) + 15, 65, x * 2, x + 15, y + 65, y + 56);
	fill('black')
	rect(x + 48,y + 50,24,5);//eyebrow
	rect(x + 98,y + 50,24,5);//eyebrow

	line(x + 45,x + 40,x + 42,x + 50); //beard
	line(x + 49,x + 40,x + 47,x + 55);//beard
	line(x + 51,x + 45,x + 49,x + 59); //beard
	//arc(300,200,120,10,0,PI,);

	ellipse(x + 66,y + 60,8,8);//right eye
	ellipse(x + y + 16,y + 60,8,8);
}


// shapes that are only x,y points 
 
