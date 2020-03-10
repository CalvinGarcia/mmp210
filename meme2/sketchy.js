/*

Meme 2 again

*/

//image variables 

var hide;
var harry;
var rage;
var anger;
var instructions = 'harold hides his emotions. Scroll to the corresponding corner to reveal what it looks like with corresponding emojis.';


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
		if (mouseX < width/2 && mouseY < height/2){
			image(harry,0,height/7,600,400);}
		else if (mouseX > width/2 && mouseY < height/2){
			image(anger,0,height/7,600,400);} 	
			else if (mouseX < width/2 && mouseY >height/2){
				image(rage,0,height/7,600,400);}
				 else (mouseX > width/2 && mouseY > height/2)
					image(happy,0,height/7,600,400);   

				
				}

	text(instructions,width/4,height/18,300,200);
	textFont('Arial');	
	textSize(14);	


}					