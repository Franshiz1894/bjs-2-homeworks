"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d;
	d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100;
	let monthlyPercent = percent / 12;
	let bodyCredit = amount - contribution;
	let payment = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let sum = payment * countMonths;
	sum = sum.toFixed(2);
	sum = Number(sum);
	return sum;
}