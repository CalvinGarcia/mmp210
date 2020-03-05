/*

Meme 2

*/

var hide;
var harry;


function preload(){

	hide = loadImage("hide.jpg");
	harry = loadImage("harry.jpg");
}

function setup(){
	createCanvas(600,600);

}
function draw(){

	
	background('white');
	if (mouseX < width/2) {
		background('black');
	}

	if (mouseIsPressed){
		image(harry,0, 100,600,325);
		} else { 
			image(hide,0, 100,600,325);

		}
	

	var fort = 'Who\'s up for a fortnite?';
	var guys = 'Ok cool guys, have fun';
	
	//fill('white');
	stroke('black');
	strokeWeight(4);
	textFont('impact');
	textSize(40);
	textStyle(BOLD);
	textAlign(CENTER);

	
	if (mouseIsPressed){
	text(guys,width/2,480);
		} else{
			text(fort,width/2,480);

		}
	
	

	var Sam= 'ME TRYING TO RELATE TO MY CLASSMATES'

	textSize(36);
	strokeWeight(3);
	text(Sam,width/2,80);

	//ellipse(width/2,height/2,face)


}

