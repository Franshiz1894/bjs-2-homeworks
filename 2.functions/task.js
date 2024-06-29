function getArrayParams(...arr) {
	var min = Infinity;
	var max = -Infinity;
	var sum = 0;
	var avg = 0;
	//for (var i = 0; i < arr.length; i++) {
	//   sum += i;
	//    if (arr[i] > max) {
	//      max = arr[i];
	//    };
	//    else if (arr[i] < min) {
	//     min = arr[i];
	//    };
	// const avg = sum / [...arr].length;
	 max = Math.max(...arr);
	 min = Math.min(...arr);
	 sum = [...arr].reduce((total, currentValue) => total + currentValue, 0);
	avg = sum / [...arr].length;
	avg = avg.toFixed(2);
	avg = Number(avg);
	return {
		min: min,
		max: max,
		avg: avg
	};

};

function summElementsWorker(...arr) {
	var sum = 0;
	if (arr || arr.length) {
		sum = [...arr].reduce((total, currentValue) => total + currentValue, 0);
		return {
			sum
		};
	};
};

function differenceMaxMinWorker(...arr) {
	var min = Infinity;
	var max = -Infinity;
	var dif = 0;
	if (arr || arr.length) {
		var max = Math.max(...arr);
		var min = Math.min(...arr);
		var dif = max - min;
		return {
			dif
		};
	};
};

function differenceEvenOddWorker(...arr) {
	var sumEvenElement = 0;
	var sumOddElement = 0;
	var dif = 0;

	if (arr || arr.length) {
		for (var i = 0; i < [...arr].length; i++) {
			if (i % 2 == 0) {
				sumOddElement += [...arr][i];
			} else {
				sumEvenElement += [...arr][i];
			};
		};
		dif = sumEvenElement - sumOddElement;
		dif = Math.abs(dif);
		return {
			dif
		};
	};
};

function averageEvenElementsWorker(...arr) {
	var sumEvenElement = 0;
	var countEvenElement = 0;
	var avg = 0;
	if (arr || arr.length) {
		for (var i = 0; i < [...arr].length; i++) {
			if (i % 2 !== 0) {
				sumEvenElement += [...arr][i];
				countEvenElement += 1;
			};
		};
		avg = sumEvenElement / countEvenElement;
		return {
			avg
		};
	};
};

function makeWork(arrOfArr, func) {
	var maxWorkerResult = -Infinity;
	if (arrOfArr || arrOfArr.length) {
		if (arrOfArr) {
			for (let i = 0; i < func.length; i++) {
				funcNow = func[i];
				for (let i = 0; i < arrOfArr.length; i++) {
					if (funcNow(arrOfArr[i]) > maxWorkerResult) {
						maxWorkerResult = func(arrOfArr[i]);
					};
				};
			};
		};
		return {
			maxWorkerResult
		};
	};
};
