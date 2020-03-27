/*

Meme 4

*/

var calvy  
var r
var s
var speed
var loading = 'Meme Loading';
var stay = 'Stay Tuned';
var dot = '...'
var x = frameCount * PI / 100;

 function setup(){ 
 	createCanvas (600,600);
 	calvy = loadImage("SmokingCalvy.jpg");

 	r = 0;
 	s = 2;
 	speed = .05;

 }

 function draw() { 
 	background('white');


	push();

		
	textFont('impact');
 	textAlign(CENTER);
 	textSize(60);
 	color('black');		
	text(stay,width/2, height-540);
 	
 	var r = frameCount * PI / 200;

 	
	shearX(r);

 	text(loading, width/2, height-20);
 	
 	text(dot, 500,height-20);
 	
	//var h = dot.substring();
	//var displayString = dot.substring(0,3);
	
pop();

 	translate( width/2, height/2);
 	
 

 	rotate(r);
 		r+= .01 * PI; 
 	scale(s);
 		s+= speed;	
 	


 	imageMode(CENTER);
 	image(calvy, 0 , 0, 80, 80);

 	

 		if ( s > 4 || s < 2) { 
 			speed *= -1; 



 

 		}





 }