"use strict"

$('.drum').click(() => {
	alert("I got clicked");
})

// let drums = $('.drum').length;
//
// for (let i = 0; i < drums.length ; i++) {
// 	drums.click(() => {
// 		alert("I got clicked")
// 	})
// }
function add(num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function divide(num1, num2) {
	return num1 / num2;
}

function calculator(num1, num2, operator) {
	switch (operator) {
		case "subtract":
			return num1 - num2;
			break;
		case "add":
			return num1 + num2;
			break;
		case "multiply":
			return num1 * num2;
			break;
		case "divide":
			return num1 / num2;
			break;
	}
}

console.log(calculator(5, 3, "multiply"));
console.log(calculator(10, 5, "subtract"))

function calc(num1, num2, operator) {
	return operator(num1, num2);
}

console.log("2 + 5 = " + calc(2, 5, add));
console.log("200 - 100 = " + calc(200, 100, subtract));
console.log("5 x 5 = " + calc(5, 5, multiply));
console.log("144 / 12 = " + calc(144, 12, divide));




