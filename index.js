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


// $('.w').click(() => {
// 	// console.log(this.html());
// 	// console.log($('.w').css("color", "white"));
// 	$('.w').mousedown(() => {$('.w').css("color", "yellow")});
// 	$('.w').mouseup(() => {$('.w').css("color", "#DA0463")});
// 	// $(this).css("color", "white");
// 	crash.play().then(r => {
// 		console.log("successfully played crash sound")
// 	});
// })
// $('.a, drum').click(() => {
// 	console.log($('.a').html());
// 	$('.a').mousedown(() => {$('.a').css("color", "yellow")});
// 	$('.a').mouseup(() => {$('.a').css("color", "#DA0463")});
// 	kickBass.play().then(r => {
// 	console.log("successfully played kick bass sound")})
// });
//
// $('.s, drum').click(() => {
// 	console.log($('.s').html());
// 	$('.s').mousedown(() => {$('.s').css("color", "yellow")});
// 	$('.s').mouseup(() => {$('.s').css("color", "#DA0463")});
// 	snare.play().then(r => {
// 	console.log("successfully played snare sound")})
// });
//
// $('.d, drum').click(() => {
// 	console.log($('.d').html());
// 	$('.d').mousedown(() => {$('.d').css("color", "yellow")});
// 	$('.d').mouseup(() => {$('.d').css("color", "#DA0463")});
// 	tom1Drum.play().then(r => {
// 	console.log("successfully played tom1 drum sound")})
// });
//
// $('.j, drum').click(() => {
// 	console.log($('.j').html());
// 	$('.j').mousedown(() => {$('.j').css("color", "yellow")});
// 	$('.j').mouseup(() => {$('.j').css("color", "#DA0463")});
// 	tom2.play().then(r => {
// 	console.log("successfully played tom2 drum sound")})
// });
//
// $('.k, drum').click(() => {
// 	console.log($('.k').html());
// 	$('.k').mousedown(() => {$('.k').css("color", "yellow")});
// 	$('.k').mouseup(() => {$('.k').css("color", "#DA0463")});
// 	tom3.play().then(r => {
// 	console.log("successfully played tom3 drum sound")})
// });
//
// $('.l, drum').click(() => {
// 	console.log($('.l').html());
// 	$('.l').mousedown(() => {$('.l').css("color", "yellow")});
// 	$('.l').mouseup(() => {$('.l').css("color", "#DA0463")});
// 	tom4.play().then(r => {
// 	console.log("successfully played tom4 drum sound")})
// });
//
//
//
// // function add(num1, num2) {
// // 	return num1 + num2;
// // }
// // function subtract(num1, num2) {
// // 	return num1 - num2;
// // }
// // function multiply(num1, num2) {
// // 	return num1 * num2;
// // }
// // function divide(num1, num2) {
// // 	return num1 / num2;
// // }
// //
// // function calculator(num1, num2, operator) {
// // 	switch (operator) {
// // 		case "subtract":
// // 			return num1 - num2;
// // 			break;
// // 		case "add":
// // 			return num1 + num2;
// // 			break;
// // 		case "multiply":
// // 			return num1 * num2;
// // 			break;
// // 		case "divide":
// // 			return num1 / num2;
// // 			break;
// // 	}
// // }
// //
// // console.log(calculator(5, 3, "multiply"));
// // console.log(calculator(10, 5, "subtract"))
// //
// // function calc(num1, num2, operator) {
// // 	return operator(num1, num2);
// // }
// //
// // console.log("2 + 5 = " + calc(2, 5, add));
// // console.log("200 - 100 = " + calc(200, 100, subtract));
// // console.log("5 x 5 = " + calc(5, 5, multiply));
// // console.log("144 / 12 = " + calc(144, 12, divide));
//
//
//
//
