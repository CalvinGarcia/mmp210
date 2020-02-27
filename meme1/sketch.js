/*

Meme 1

*/

var img;

function preload(){

	img = loadImage("hide.jpg");
}

function setup(){
	createCanvas(600,600);

}
function draw(){


	var r = mouseX
	var g = mouseY
	var b = 0 	

	background(r,g,b);

	

	image(img, 0, 100,600,325);

	var str= "Who's up for a fortnite?"
	var length = str.length; 
	var n = map(mouseX,0,width,0,length);
	var displayString = str.substring(0,n);
	text(displayString,width/2,480);

	fill('white');
	stroke('black');
	strokeWeight(4);
	textFont('impact');
	textSize(40);
	textStyle(BOLD);
	//text("Who's up for a fortnite",width/2,480);
	textAlign(CENTER);
	






	var x= 50;
	var y= 50;
	var d=50;

	
	//var face= (x,y,d);

	var Sam= 'Me trying to relate to my classmates'

	textSize(36);
	strokeWeight(2);
	text(Sam,width/2,80);

	//ellipse(width/2,height/2,face)


}

