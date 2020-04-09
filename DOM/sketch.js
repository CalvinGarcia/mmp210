/*

DOM Elements

*/

var angleSlider;
var nameInput;

function setup(){
	createCanvas(600,360);
// 	pattern(); angleslider must be called before pattern

	angleSlider = createSlider(0,TWO_PI);
	angleSlider.input(pattern);

//	pattern();

	var patternButton = createButton("Reset Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save Image"); 
	saveButton.mousePressed(saveImage);

	nameInput = createInput("Type your name");

}

function saveImage(){
	save("pattern.png");
}

/*
function updateAngle() {
	angle += 0.01;
	pattern();
}

*/

function pattern(){
	background('green');

	for( let x =0; x<= width + 100; x+= 100 ){
		
		push();
		translate(x, height/3.5);
		rotate(angleSlider.value * PI);
		fill('purple');
		rect( x, random(height), random(100,200), random(100,200));
		pop();
	}

		textAlign(CENTER, CENTER);
		textSize(30);
		fill('red');
//		stroke('black');
//		strokeWeight(10);
		text(nameInput.value(), width/2, height/2);
	


}