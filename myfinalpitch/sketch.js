/* 

My final Pitch 

*/

var title;
var currentSlide = 0;
var totalSlides = 3;
var bodyText;
var nextButtonX = 650; 
var nextButtonY = 440;
var nextButtonW = 100 ;
var nextButtonH = 35;
var prevButtonX = 20
var prevButtonY = nextButtonY
var prevButtonW = nextButtonW
var prevButtonH = nextButtonH


function setup(){

	createCanvas(800, 500);
}

function draw(){

	background('black');

// window for text and images 
	fill('white');
	rect(100,100, 600, 300);

// Titles 
	textSize(40);
	fill('yellow');
	text(title, width/ 8, height / 6);

// Body Text
	textSize(20);
	fill('black');
	text(bodyText, width/5, height/4,400 );


		
	fill('yellow');
	rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH);

	
	fill('black');
	textSize(20);
	text( " << Prev" , prevButtonX, prevButtonY, prevButtonW, prevButtonH );
	text( "Next >>" , nextButtonX, nextButtonY, nextButtonW, nextButtonH)

// Title text for Slides 
	if(currentSlide == 0){
		title = "Welcome to my final project pitch."; 
		bodyText = "In the slides ahead I will define my project in it's entirety.";
	} else if( currentSlide == 1){
		title = " Core Concept" ;
		bodyText = "My final project will use pictures and images to tell a short interactive story.";
	} else if( currentSlide == 2){ 
		title = "Audio / Visual" ; 
		bodyText = "I will include hand drawn images, as well as sounds, and text to immerse the viewer. ";
	} else if( currentSlide == 3){
		title = "Programming";
		bodyText = "The story will include several concepts learned this semester such loading images, sound sampling, keyboard interactions and java programmed buttons ";
	}	

}




function mousePressed(){

	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if( currentSlide < totalSlides ) {
		currentSlide++; }
	
	}

	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH ){
		if( currentSlide > 0) {
			currentSlide--;
		}
	}

}







