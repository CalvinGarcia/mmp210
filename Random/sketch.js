/* 

Random 

*/


function setup(){
	createCanvas(600,360);


}

function draw(){

	background('black');
	frameRate(20);


	for ( let x = 0; x <= width; x += 20){

			let s = random(100);
			let r = random(0);
			let g = random(100,255);
			let b = random(100,255);

			fill (r,g,b);
			rect(x ,25 ,20 ,s *2);
			rect(x,400, 20, s *-2);

/*
			fill ('red');
			rect(x + 7, 50, 5, s);
			rect(x, 57, 20, 5);

*/			
	}




}	
	