/*

Sound

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
	var x= 50;
	var y= 50; 

	if(matchSound.isPlaying()) {
		image(match, width/5, 100,150,300);
		//image(match, width/1.5 height/3, 150, 300);
		}
	if(faucetSound.isPlaying()) {
		image(faucet, width/1.8, 100,150,300);
	}

	

	text(strike, width/5, y);
	text(wet, width/2, y);
	text(turnOff,width/2, y * 9);




}

	function keyPressed(){
		
		if (keyCode == 77){
			if(matchSound.isPlaying()) {
				matchSound.pause();
			}	else {
				matchSound.play();
			}
		}	



		if (keyCode == 70){
			if (faucetSound.isPlaying()) {
				faucetSound.pause();
			}	else {
				faucetSound.play();
			}

			}
		

	}
		

