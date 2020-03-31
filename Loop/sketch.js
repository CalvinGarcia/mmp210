/* 

Loop 

*/


function setup(){
	createCanvas(600,360);

}

function draw(){

	background('black');

	for ( let x = 50; x <= width; x += 100){
			fill('blue');
			

			fill ('white');
			rect(x ,50 ,20 ,20);

			fill ('red');
			rect(x + 7, 50, 5, 20);
			rect(x, 57, 20, 5);
	}




}	
	