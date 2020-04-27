/* 

Nested Loop Ex.

*/


function setup(){
	createCanvas(500,500);
	colorMode(HSB);

	var np = createButton("See New Pattern");
	np.mousePressed(pattern);

	var save = createButton("Save Pattern");
	save.mousePressed(saveImage);

	sizeSlider = createSlider(0,500);
	sizeSlider2 = createSlider(0,500);
	colorSlider = createSlider(0,255);

	sizeSlider.input(pattern);
	sizeSlider2.input(pattern);
	colorSlider.input(pattern);




	pattern();


}

function saveImage(){
	save('pattern.jpg');
}

function pattern(){
	
	background('black');
	var w = 20; //width of one cell
	var h = w; //height of one cell
	



	for ( let x = 0; x <= width; x += w){
		for ( let y = 0; y <= height; y+= h){
		
		push();

		let r = colorSlider.value() + random(1,20);
		let g = random(1,150);
		let b = random(1,255);


		translate(x,y);
		
	
		stroke('white');
		fill(r, g, b);

		rect(sizeSlider.value(), sizeSlider2.value(), random(0,50),random(0,50));
		
			

		pop();
	}


	}
}