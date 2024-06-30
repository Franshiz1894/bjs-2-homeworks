function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
		max = Math.max(...arr);
		min = Math.min(...arr);
		sum = arr.reduce((total, currentValue) => total + currentValue, 0);
		avg = Number(sum / arr.length.toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};

}; 		

function summElementsWorker(...arr) {
	return arr.reduce((total, currentValue) => total + currentValue, 0);
};

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	if (!arr.length) {
		return 0;
	};
	max = Math.max(...arr);
		min = Math.min(...arr);
	return max - min;	
};

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			sumOddElement += arr[i];
		} else {
			sumEvenElement += arr[i];
		};
	};
	return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (!arr.length) {
		return 0;
	};
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		};
	};
	return sumEvenElement / countEvenElement;
};

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	func (arrOfArr){
		for (let i = 0; i < arr.length; i++) {
			let max = func(...arrOfArr[i]);
			if(max > maxWorkerResult){
			  maxWorkerResult = max;
			}
		};
	};
	return maxWorkerResult;
};
