/*

Sound

*/

var match
var faucet 
var matchSound
var faucetSound

var strike = "strike a match!"
var wet = "turn on the faucet."

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

	var x= 50;
	var y= 50; 



	background('white');

	translate(x,y);
	push();
	image(match, x-10, y, 150, 300);
	image(faucet, x+150, y,150,300);
	text(strike,x,y * 8);
	text(wet, x * 4, y * 8);
	pop();

}

	function mousePressed(){
		matchSound.play()

		}
		
		
			

