/*


Function Demo 



*/


var match
var faucet 
var matchSound
var faucetSound

var strike = "Press M to strike a match."
var wet = "Press F key to turn on the faucet."
var turnOff = "Press F again to turn off the faucet."


function preload(){
	 match = loadImage ("match.jpg");
	 faucet = loadImage("faucet.jpg");
	 matchSound = loadSound("matchstrike.wav");
	 faucetSound = loadSound("runningwater.wav"); 
}

function setup(){
  	createCanvas (500,500);

}

function draw(){
background('white');

fill('white');
//ellipse(100, 100, 100);

	
button(200,400,100);

button(300,300,100);

}


function button(x,y,s){

	

	var d = dist(x,y,mouseX,mouseY);

	if( d < s/2){
		if(mouseIsPressed){
		fill('plum');
	} else {
		stroke('red');
		strokeWeight(4);
		}
		} else{
			fill('blue');
			noStroke(); 
		}	

			ellipse(x, y, s);	
		}

	
		

	
