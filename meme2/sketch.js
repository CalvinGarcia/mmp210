/*

Meme 2

*/

	var instructions= "Harold hides his feelings. Click the corresponding emotion to see what he really looks like when he's not hiding his feelings."
	var feelings=" I'm fine. "
	var counter = 0
	


function preload(){
	hide = loadImage('hide.jpg');
	harry = loadImage('harry.jpg');
	happy = loadImage('happy.jpg');
	angry = loadImage('angry.png');
	
}

function setup(){
	createCanvas(600,600);

}

function mouseIsPressed(){
		counter++;

		

	}

function draw(){
	background('white');

	image(hide,0,height/4,width,height/2);
	image(happy,0,0,height/4,width/4);
	image(angry,450,0,height/4,width/4);
	textFont('arial');
	textSize(14);
	text(instructions, width/3,height/10,200,200);

	if ( counter == 0)
		image(harry,0,height/4,width,height/2); 
	} else if ( counter == 1) {
		image( ) 
	
}




