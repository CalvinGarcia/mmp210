/*

Meme 2 again

*/

//image variables 

var hide;
var harry;
var rage;
var anger;
var instructions = 'Harold hides his feelings. Scroll to one of the corners and click the emoticon to reveal what Harold actually looks like when he\'s feeling one of these emotions.';
var messageHappy = ' ∩(︶▽︶)∩';
var messageAnger = ' (  ಠ益ಠ  )';
var messageFlirty = '(  >‿‿◕ )';
var messageSerene = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧';

//other variables 

function preload(){
	 hide = loadImage("hide.jpg");
	harry = loadImage("harry.jpg");
	anger = loadImage("anger.jpeg");
	rage = loadImage("rage.jpg");
	happy = loadImage("happy.png");
}

function setup(){
	createCanvas(600,600);

}
	
// function mousePressed(){


function draw(){

	background('white');
	
	image(hide,0,height/7,600,400);
	if (mouseIsPressed) {
		if (mouseX < width/2 && mouseY < height/2) {
			image(harry,0,height/7,600,400);
		}
		else if (mouseX > width/2 && mouseY < height/2) {
			image(anger,0,height/7,600,400);
		} 	
		else if (mouseX < width/2 && mouseY > height/2) {
			image(rage,0,height/7,600,400);
		}
		else if (mouseX > width/2 && mouseY > height/2) {
			image(happy,0,height/7,600,400);   
		}
	}

	textFont('Arial');	
	textSize(14);
	text(instructions, width/4, height - 580, 300, 200);
		


	textSize(18);
	color('black');
	text(messageHappy, 25,50);
	text(messageAnger, width - 100, 50);
	text(messageFlirty, 50 , height - 50 );
	text(messageSerene, width - 150, height - 50);

}					