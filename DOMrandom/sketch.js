/* 

Random 

*/

var colorSlider ; 
var sizeSlider ; 
//var snapshot;


function setup(){
	createCanvas(600,360);
	colorMode(HSB);


	colorSlider = createSlider(0,255,5,5);
	sizeSlider = createSlider(0,200);

	var snapshot = createButton("Take A Snapshot");
	snapshot.mousePressed(save);

//	colorSlider.input()

/*
function saveImage()
	save("snapshot.png");
*/	
}

function draw(){

	background('black');
	frameRate(20);


	for ( let x = 0; x <= width; x += 20){

			let s = random(sizeSlider.value());
/*			
			let r = random(0);
			let g = random(100,255);
			let b = random(100,255);
*/

			fill (colorSlider.value(), 255,255,255);
		//	rect(x ,25 ,20 ,s *2);
			rect(x,400, 20, s *-2);

/*
			fill ('red');
			rect(x + 7, 50, 5, s);
			rect(x, 57, 20, 5);

*/			
	}




}	
	