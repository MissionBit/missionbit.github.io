// Main Menu Code - Starting Screen

"use strict";

// Get the canvas element from the document
var canvas = document.getElementById("paper");

// Set canvas size
canvas.width = 840;
canvas.height = 560;

// ctx
var ctx = canvas.getContext("2d");

var running = false;

function startScreen() {
	const img = new Image();
	img.src = "../images/startScreen.png";

	ctx.drawImage(img, canvas.width / 2 - 80, canvas.height / 2 - 80);
	
	console.log(running);
}

function start() {
	canvas.addEventListener("mousedown", function (e) {
    	running = true;
    	console.log(running);
	});
}

if (!running) {
    startScreen();
    start();
}
