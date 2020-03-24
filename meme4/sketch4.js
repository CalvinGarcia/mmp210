/*

Meme 4

*/

var calvy  
var r
var s


 function setup(){ 
 	createCanvas (600,600);
 	calvy = loadImage("SmokingCalvy.jpg");

 	r = rotate(frameCount * 80, TWO_PI);
 	s = scale(frameCount/2 );
 	

 }

 function draw() { 
 	background('white');

//goal is to zoom in regular and then spin backward 

 	translate( width/2, height/2);
 	rotate(frameCount * 5, TWO_PI);
 	scale(frameCount/20 );
 	
 	

 	imageMode(CENTER);
 	image(calvy, 0 , 0, 50, 50);	
 		if (frameCount > 1000) {
 			scale(framecount %;

 		}





 }