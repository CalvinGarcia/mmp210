/*

Meme 1

*/

function setup(){
	createCanvas(400,400);

}
function draw(){

	background('#f5902c');

	textFont('Futura'||'impact')
	textSize(55);
	textStyle(BOLD);
	//stroke('green');
	strokeWeight(10);
	text("cannon ball!",width/2,height/3.5);
	textAlign(CENTER);
	
	var r = mouseX
	var g = mouseY
	var b = 0 

	fill(r,g,b);



	var x= 50;
	var y= 50;
	var d=50;
	
	var face= (x,y,d);

	var Sam= 'I do not like them, Sam I am'

	textSize(20);
	strokeWeight(2);
	text(Sam, width/3.5,height/2,100,100);

	ellipse(width/2,height/2,face)


}

