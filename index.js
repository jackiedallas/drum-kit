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




