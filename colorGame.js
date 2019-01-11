var level = 6;
var color = getRandomColor(level);
var squares =document.querySelectorAll(".square");
var pickedColor = getColor();
var resetButton = document.querySelector("#reset");
var colorDisplay = document.querySelector("h1 span");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var headingColor = document.querySelector("h1");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function(){
	color = getRandomColor(level);
	pickedColor = getColor();
	messageDisplay.textContent = "";	
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	headingColor.style.backgroundColor = "#81D4FA"
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color[i];
	}
});

easyButton.addEventListener("click",function(){
	level = 3;
	color = getRandomColor(level);
	pickedColor = getColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	headingColor.style.backgroundColor = "#81D4FA"
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	for(var i = 0; i< squares.length; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click",function(){
	level = 6;
	color = getRandomColor(level);
	pickedColor = getColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	headingColor.style.backgroundColor = "#81D4FA"
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color[i];
		squares[i].style.display = "block";
		}
	});


for(var i = 0; i< squares.length; i++){
	squares[i].style.backgroundColor = color[i];

	squares[i].addEventListener("click",function(){
		selectedColor = this.style.backgroundColor;
		if(pickedColor === selectedColor){
			messageDisplay.textContent = "CORRECT :)";
			headingColor.style.backgroundColor = selectedColor;
			resetButton.textContent = "Play Again ?";
			for(var i = 0; i< squares.length; i++){
				squares[i].style.backgroundColor = selectedColor;
			}
		}else{
			messageDisplay.textContent = "Try AGAIN !!";
			this.style.backgroundColor = "#232323"		}
	});
}

function getColor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}

function getRandomColor(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var color = "rgb("+red+", "+green+", "+blue+")";
	return color;
}