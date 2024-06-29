function getArrayParams(...arr) {
	/*var min = Infinity;
	var max = -Infinity;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
	  sum += i;
	   if (arr[i] > max) {
	     max = arr[i];
	   };
	   else if (arr[i] < min) {
	    min = arr[i];
	   };
	const avg = sum / [...arr].length;
	*/
	var max = Math.max(...arr);
	var min = Math.min(...arr);
	var sum = [...arr].reduce((total, currentValue) => total + currentValue, 0);
	var avg = sum / [...arr].length;
	avg = avg.toFixed(2);
	avg = Number(avg);
	return {
		min: min,
		max: max,
		avg: avg
	};

};

function summElementsWorker(...arr) {
	if (arr || arr.length) {
		var sum = [...arr].reduce((total, currentValue) => total + currentValue, 0);
		return {
			sum
		};
	};
};

function differenceMaxMinWorker(...arr) {
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
	if (arr || arr.length) {
		var sumEvenElement = 0;
		var sumOddElement = 0;
		for (var i = 0; i < [...arr].length; i++) {
			if (i % 2 == 0) {
				sumOddElement += [...arr][i];
			} else {
				sumEvenElement += [...arr][i];
			};
		};
		var dif = sumEvenElement - sumOddElement;
		var dif = Math.abs(dif);
		return {
			dif
		};
	};
};

function averageEvenElementsWorker(...arr) {
	if (arr || arr.length) {
		var sumEvenElement = 0;
		var countEvenElement = 0;
		for (var i = 0; i < [...arr].length; i++) {
			if (i % 2 !== 0) {
				sumEvenElement += [...arr][i];
				countEvenElement += 1;
			};
		};
		var avg = sumEvenElement / countEvenElement;
		return {
			avg
		};
	};
};

function makeWork(arrOfArr, func) {
	if (arrOfArr || arrOfArr.length) {
		var maxWorkerResult = -Infinity;
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