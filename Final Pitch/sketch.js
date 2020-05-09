/*

Final Pitch 

*/
var title; 

var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33 ;

var currentSlide = 0;
var numberOfSlides = 3;

var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW;
var prevButtonH = nextButtonH; 

var description; 

function setup(){
	createCanvas (960,720);

}

function draw(){
	background ('black');

	if (currentSlide == 0) {
		title = "Hello World";
		description = "What up berd";
	} else if( currentSlide == 1){
		title = "Hoes World";
	} else if( currentSlide == 2){
		title = " End of Hoes"
	}

	textSize(100);
	fill('white');
	textAlign(CENTER, CENTER);
	text(title,width/2 ,100);

	textSize(42);
	text(description, width/2, height/2);

// 	text('slide' + currentSlide,100,100)

// slide button 

// button design 
	fill('plum');
	stroke('white');
	strokeWeight(4); 

// buttons 	

	//if ( currentSlide < numberOfSlides - 1){
	rect(nextButtonX,nextButtonY,nextButtonW,nextButtonH);
}
//	if (currentSlide > 0) {
	rect(prevButtonX,prevButtonY,prevButtonW,prevButtonH); 
	
// inside button design
	textAlign(CENTER,CENTER);
	noStroke();
	textSize(16);
	fill('white');

	if( currentSlide < numberOfSlides - 1){
	text("Next" , nextButtonX,nextButtonY, nextButtonW, nextButtonH);
}
	if (currentSlide > 0) {
	text("Prev", prevButtonX,prevButtonY,prevButtonW,prevButtonH);
}




function mousePressed(){
	// detects mouse collision with next button 
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH){
		if ( currentSlide < numberOfSlides - 1){
		currentSlide++; }

	}

	// detects mouse collision with previous button 
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW && 
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if (currentSlide > 0) {
		currentSlide--;
	}

}

}

/*	
	var d = dist(width/2, height/2, mouseX, mouseY);
	var s = 300; // size variable
	if ( d <s/2){
		fill('red');
	}else{
			fill('green');
		}

	ellipse (width/2 , height/2, s);

demo code

*/	

