/* 

Loop 

*/


function setup(){
	createCanvas(600,360);

}

function draw(){

	background('black');

	for ( let x = 100; x <= width; x += 100){
		
			

			fill ('white');
			rect(x ,50 ,50 ,50);
			

			fill ('red');
			noStroke();
			rect(x + 25, 50, 8, 50);
			rect(x, 70, 50, 8);
	}




}	
	