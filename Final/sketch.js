/* 

Final Project 

*/

var title;
var currentSlide = 0;
var totalSlides = 13;
var bodyText;
var nextButtonX = 820; 
var nextButtonY = 440;
var nextButtonW = 100 ;
var nextButtonH = 35;
var prevButtonX = 20
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW;
var prevButtonH = nextButtonH;
var placeholder;
var monster;
var run; 
var explain;
var idea;
var phew;
var surprise;
var thoughtful; 
var iou = "IOU from Calvin";
var name = "Your Name Here";
var ynh;
var payback =" I'll pay you back I promise.";
var directions = "use that text field that has been ominously hanging underneath the sketch this entire time.";
var keep = "save this for later with the save button.";
var rules = "gonna need you to hold that E key and hit next so I can jump through.";


function preload(){


	run = loadImage("run.jpg");
	monster = loadSound("monster.wav");
	explain = loadImage("explain.jpg");
	idea = loadImage("idea.jpg");
	phew = loadImage("phew.jpg");
	surprise = loadImage("surprise.jpg");
	thoughtful = loadImage("thoughtful.jpg");
	getAway = loadImage("escape.jpg");

}

function setup(){

	createCanvas(960, 500);
	 ynh = createInput("your name here");

	textSize(10);
	fill('black');

	var fold = createButton("Save for Later");
	fold.mousePressed(save);

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
	text(bodyText, width/7, height/4, 200 );


		
	fill('yellow');
	rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH);
	rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH);

	
	fill('black');
	textSize(20);
	text( " << Prev" , prevButtonX, prevButtonY, prevButtonW, prevButtonH );
	text( "Next >>" , nextButtonX, nextButtonY, nextButtonW, nextButtonH);



// Title text for Slides 
	if(currentSlide == 0){
		title = "Welcome to my final project."; 
		bodyText = "Please make sure your sound is on.\n \n( just not too loud) \n \n Have fun.";
		image(run, width/2, height/5, 300, 300);
	} else if( currentSlide == 1){
		title = "";
		bodyText = "Huff. Huff.";
		image(run, width/4, height/5, 300, 300);
	} else if( currentSlide == 2){ 
		title = "Inciting Incident" ; 
		bodyText = "Wow, am I glad to see you. \n \n While working on this project I've some how managed to get trapped in the computer, or wherever this is.  ";
		image(explain, width/2.5, height/5, 300,300);
	} else if( currentSlide == 3){
		title = "Programming Problem?";
		bodyText = "Maybe it was something in the syntax? ";
		image(thoughtful, width/3, height/5, 300,300);
	} else if( currentSlide == 4){
		title = " ";
		bodyText = " But I guess that’s not important. \n \n Anyway, look I need, your help. "
		image(explain, width/2.5, height/5, 300,300);
	}else if( currentSlide == 5){
		title = "";
		bodyText = " monster sound plays."
		image(surprise, width/2.5, height/5, 300,300);
	}else if ( currentSlide == 6){ 
		title = "Rising Action";
		bodyText = "We should probably be quick about it too, there’s a giant monster in here somewhere. ";
		image(explain, width/2.5, height/5, 300,300);
	}else if( currentSlide == 7){
		title = "";
		bodyText = "I think we can make this quick by just drawing an ellipse right here. "
	}else if ( currentSlide == 8){
		title = ""; 
		bodyText = "Hit the E key and the ellipse should appear.";
		if(keyIsPressed){
			fill('blue');
			ellipse(800,260,100);
			fill('white');
			text(rules,200, height-50);
		}
	}else if ( currentSlide == 9){
		title = "Climax or Anti Climax?";
		bodyText = "monster sound plays again place";
		image( getAway , width/2, height/5, 300, 300 );
	}else if( currentSlide == 10){
		title = "The End?"
		bodyText = " Phew! Thanks for your help,";
		image(phew ,width/2, height/5, 300, 300 );
	}else if( currentSlide == 11){
		title = "";
		bodyText = " So, uh..."; 
	}else if( currentSlide == 12){
		title = ""
		bodyText = " I don't have any cash on me, so here's an IOU. \n \n You can save it to your computer and print it out. \n \n I'll return the favor later"; 
	}else if ( currentSlide == 13){
		title = "The Calvin Garcia Payback Promise";
		bodyText = "This IOU void after this semester.";
		background('brown');
		fill('white');
		textSize(40);
		text(title, width/ 8, height / 6);
		rect(width/2,100,300,300);
		fill('black');
		textSize(16);
		text(iou, 500, 200);
		fill('white');
		text(directions, 150,200,200);
		text(keep,150,340,200);
		textSize(10);
		fill('black');

		line( 500, 300,700, 300);
		textSize(30);
		text(ynh.value(),500,290);


		}
}





	
function mousePressed(){

//next button 
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if( currentSlide < totalSlides ) {
		currentSlide++; }

	}

//prev button 
	if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH ){
		if( currentSlide > 0){
			currentSlide--;
		}
}

	//monster noise cue 
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if(currentSlide == 5 || currentSlide == 9){
				monster.play(); 
		}

		}
	
}



