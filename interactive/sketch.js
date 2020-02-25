
// global scope


// position variables 




var x = 200;
var y = 100;


//  size variables 

var d = 100

// color variables

var faceColor = 'blue';

//misc.

var mouth = 

		beginShape();
		fill('white');
		stroke('black');
		strokeWeight(2);	
	
		curveVertex	(x/4,y);
		curveVertex	(x/4,y);
		curveVertex	(x,y);
		curveVertex	(x,y+60);
		curveVertex	(x/4,y + 40);
		curveVertex	(x/4,y + 5);
		curveVertex	(x/4, y)
		endShape('CLOSE');




function setup () { 
	createCanvas (640,360);


}


function draw () {
	
	/*var x = mouseX;
	var y = mouseY;
	*/


	background ('white');
	
	fill(faceColor);

	ellipse(x+100,x ,y + 20,y + 70,20);// head
	
	
	noStroke()
	fill(faceColor)

	ellipse( x + 140, y + 60,d/2,d/2,);//hair1
	ellipse( x + 150, y + 70, d/2,d/2);
	ellipse( x + 154, y + 80,d/2,d/2);
	ellipse( x + 160, y + 60, 40, 40);

	

	//ellipse(280,196,4,4)

	//head and eyes
	fill('white');
	stroke('black');
	ellipse(x + 60, y + 60,y/5,y/5,);//right eye
	ellipse(x + 110,y + 60,20,20,);//left eye
	fill('black')
	//arc(280,210,120,290,QUARTER_PI,QUARTER_PI,OPEN)
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

	var pupilHoriz = map(mouseX,300,640,x+60,x+70) ;
	var pupilVerti = map(mouseY,60,360,x + 60, x + 68);
	ellipse(pupilHoriz,pupilVerti-100,8,8);//right pupil 
	ellipse(pupilHoriz + 50,pupilVerti-100,8,8);// left pupil
}

	function mouseClicked() {

		faceColor = 'red';
		//fill('green');
		stroke('black');
		//bezier(86,170,80,170,160,140,110,250,170,86,250);//newcontour
		//strokeWeight(4);
		//point(x + 100,y + 60);
		//point(x + 140,y + 60);
		//point(x + 140,y + 100);
		//point(x + 100,y + 100);
		mouth 

		

}




	
// shapes that are only x,y points 
 
