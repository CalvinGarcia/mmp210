/*

sketchy 3

*/
var h;
var w;
var hide;
var x = 100;
var y = 100;


function preload(){
	hide= loadImage("hide.jpg");
	h = height;
	w = width;
}

function setup(){
	createCanvas(600,400);
	frameRate(100);

}

function draw(){
	background('grey');
	
	image(hide ,x , y, 300,200);
		x++;


		if ( x > width ) {
			x = 0;
		}




}