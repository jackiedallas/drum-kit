"use strict"

let numOfDrums = document.querySelectorAll('.drum').length;
let tom1Drum = new Audio("sounds/tom-1.mp3")
let crash = new Audio("sounds/crash.mp3")
let kickBass = new Audio("sounds/kick-bass.mp3")
let snare = new Audio("sounds/snare.mp3")
let tom2 = new Audio("sounds/tom-2.mp3")
let tom3 = new Audio("sounds/tom-3.mp3")
let tom4 = new Audio("sounds/tom-4.mp3")


for (let i = 0; i < numOfDrums; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', (function () {
		// this.style.color = "white";
		let buttonInnerHTML = this.innerHTML;
		switch (buttonInnerHTML) {
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
				console.log(buttonInnerHTML)
		}
	}))
}

