var body = document.getElementsByTagName('body')[0];

var numMonsters = 1;

// Monster Images Array
var theImages = new Array();
// Splat Images Array
var theSplats = new Array();


var minY = 0;
var maxY = window.innerHeight - 116;
var minX = 0;
var maxX = window.innerWidth - 116;

// Monster Images Array
theImages[0] = 'images/monster1.png';
theImages[1] = 'images/monster2.png';
theImages[2] = 'images/monster3.png'; 
theImages[3] = 'images/monster4.png';
theImages[4] = 'images/bigmonster1.png';
theImages[5] = 'images/bigmonster2.png';

// Splat Images Array
theSplats[0] = 'images/splat1.png';
theSplats[1] = 'images/splat2.png';

var temp = [];


// Generates Random Number To Call On The Different Monster Images
function randomNum(min, max) {
	return Math.floor(Math.random() * max) + min;
}
// Creating Monsters

function Monster() {

	var x = randomNum(minX, maxX);
	var y = randomNum(minY, maxY);

	this.element = document.createElement('img');
	this.element.className = 'monster';

	// Adds Image to Empty Array if Image is there it adds a different image

	for (var i = 0; i < 5;){

		if (temp.length === theImages.length){
			temp = [];
		}
		
		var image = theImages[randomNum(0,theImages.length)];
		
		if (temp.indexOf(image) == -1){
			this.element.setAttribute('src', image);
			temp.push(image);
			i = 10;
		}

	}

	this.element = body.appendChild(this.element);
	this.element.style.left = x + 'px';
	this.element.style.top = y + 'px';
	this.element.ondragstart = function() { return false; };
	// Running Splat Function
	this.element.onclick = Splat;

};

// Creating Splat Once Monsters Are Clicked

function Splat(obj) {
	obj = this;
	obj.src = theSplats[randomNum(0,theSplats.length)];
	
	obj.style.opacity = 1;

	var fadeOut = setInterval(function(){
		if (obj.style.opacity == 0){
			obj.remove();
			window.clearInterval(fadeOut);
		}
		else{
			obj.style.opacity = obj.style.opacity -0.1;
		}

	}, 20);

	Score();

};

// Creating Monsters at Intervals

var addMonster = function () {
	
	var monsterImage = new Monster();

	setTimeout(addMonster, 1000);

};

// Keeping Score

var counter = document.getElementsByTagName('h1')[0];
    counterH1 = document.getElementById('counter');
    counterH1.innerHTML = 0;

var score = 0
	
function Score () {
    document.getElementById("counter").innerHTML= ++score;

};

addMonster();
