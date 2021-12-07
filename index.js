"use strict"

// stored the length of drums in variable to iterate through for click event listener
let numOfDrums = document.querySelectorAll('.drum').length;

// stored sounds in variables
let tom1Drum = new Audio("sounds/tom-1.mp3")
let crash = new Audio("sounds/crash.mp3")
let kickBass = new Audio("sounds/kick-bass.mp3")
let snare = new Audio("sounds/snare.mp3")
let tom2 = new Audio("sounds/tom-2.mp3")
let tom3 = new Audio("sounds/tom-3.mp3")
let tom4 = new Audio("sounds/tom-4.mp3")

// Function to check for innerHTML and keyboard event
function makeSound(char) {
	switch (char) {
		case "w":
			crash.play();
			break;
		case "a":
			kickBass.play();
			break;
		case "s":
			snare.play();
			break;
		case "d":
			tom1Drum.play();
			break;
		case "j":
			tom2.play();
			break;
		case "k":
			tom3.play();
			break;
		case "l":
			tom4.play();
			break;
		default:
			console.log(char)
	}
	
}

// button animation function
function btnAnimate(char) {
	let currentBtn = document.querySelector("." + char);
	currentBtn.classList.add("pressed");
	setTimeout(function () {
		currentBtn.classList.remove("pressed")
	}, 100)
}

// looping through drum buttons and adding click event listener
for (let i = 0; i < numOfDrums; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', (function () {
		let buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML)
		btnAnimate(buttonInnerHTML)
	}))
}

// event listener for keyboard press
document.addEventListener("keydown", function (e) {
	makeSound(e.key)
	btnAnimate(e.key)
})