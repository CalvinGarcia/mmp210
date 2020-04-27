/* 

Nested Loop Ex.

*/

function setup(){
	createCanvas(500,500);
}

function draw(){
	background(220);
	var w = 25; //width of one cell
	var h = w; //height of one cell

	for ( let x = 0; x <= width; x += w){
		for ( let y = 0; y <= height; y+= h){
		rect(x,y,100,100);
		ellipse(x + w/2, y + w/2, w); //face
		ellipse(x + w/3.85, y+ w/2, w/4); //left eye
		ellipse(x + w/1.35, y+ w/2, w/4); // right eye

	}


	}
}