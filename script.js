$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
	fifthProblem();
	sixthProblem();
	seventhProblem();
	eighthProblem();
});

//Problem 1
function firstProblem(){
	console.log('Problem 1');
	var values = {
		1: {a: 5, b: 2},
		2: {a: 3, b: 4},
		3: {a: 5.5, b: 4.5}
	},
		first_value = '',
		second_value = '';
	for(var item in values) {
		if(values[item].b > values[item].a) {
			first_value = values[item].a;
			second_value = values[item].b;
		} else {
			first_value = values[item].b;
			second_value = values[item].a;
		}
		console.log('\t' + first_value + ' ' + second_value);
	}
};// end of function

//Problem 2
function secondProblem(){
	console.log('\nProblem 2');
	var values = {
		1: {a: 5, b: 2, c: 2},
		2: {a: -2, b: -2, c: 1},
		3: {a: -2, b: 4, c: 3},
		4: {a: 0, b: -2.5, c: 4},
		5: {a: -1, b: -0.5, c: -5.1}
	},
		result = '';
	for(var item in values) {
		if(values[item].a === 0 || values[item].b === 0 ||values[item].c === 0) {
			result = 0;
		} else if((values[item].a * values[item].b * values[item].c) < 0) {
			result = "-";
		} else if((values[item].a * values[item].b * values[item].c) > 0){
			result = "+";
		}
		console.log('\t' + values[item].a + ' * ' + values[item].b + ' * ' + values[item].c + ' result: ' + result);
	}
};// end of function

//Problem 3
function thirdProblem(){
	console.log('\nProblem 3\nThe biggest of:');
	var values = {
		1: {a: 5, b: 2, c: 2},
		2: {a: -2, b: -2, c: 1},
		3: {a: -2, b: 4, c: 3},
		4: {a: 0, b: -2.5, c: 5},
		5: {a: -0.1, b: -0.5, c: -1.1}
	},
		result = '';
	for(var item in values) {
		if(values[item].a < values[item].b) {
			if(values[item].b < values[item].c){
				result = values[item].c;
			} else {
				result = values[item].b;
			}
		} else if(values[item].a < values[item].c) {
			result = values[item].c;
		} else {
			result = values[item].a;
		}
			
		console.log('\t' + values[item].a + ', ' + values[item].b + ' and ' + values[item].c + ' is: ' + result);
	}
};// end of function

//Problem 4
function fourthProblem(){
	console.log('\nProblem 4\nValues in descending order');
	var values = {
		1: {a: 5, b: 1, c: 2},
		2: {a: -2, b: -2, c: 1},
		3: {a: -2, b: 4, c: 3},
		4: {a: 0, b: -2.5, c: 5},
		5: {a: -1.1, b: -0.5, c: -1.1},
		6: {a: 10, b: 20, c: 30},
		7: {a: 1, b: 1, c: 1}
	},
		first_value = '',
		second_value = '',
		third_value = '';
	for(var item in values) {
		if(values[item].a < values[item].b) {
			if(values[item].b < values[item].c){
				first_value = values[item].c;
				second_value = values[item].b;
				third_value = values[item].a;
			} else {
				first_value = values[item].b;
				second_value = values[item].c;
				third_value = values[item].a;
			}
		} else if(values[item].a < values[item].c) {
			first_value = values[item].c;
			second_value = values[item].a;
			third_value = values[item].b;
		} else {
			first_value = values[item].a;
			second_value = values[item].c;
			third_value = values[item].b;
		}
			
		console.log('\t' + first_value + ' ' + second_value + ' ' + third_value);
	}
};// end of function

//Problem 5
function fifthProblem(){
	console.log('\nProblem 5');
	var arr = [2, 1, 0, 5, -0.1, 'hi', 9, 10],
		result = '',
		ii = 0,
		len = arr.length;
	for(ii; ii < len; ii+=1) {
		switch(arr[ii]) {
			case 1: result = 'one'; break;
			case 2: result = 'two'; break;
			case 3: result = 'three'; break;
			case 4: result = 'four'; break;
			case 5: result = 'five'; break;
			case 6: result = 'six'; break;
			case 7: result = 'seven'; break;
			case 8: result = 'eight'; break;
			case 9: result = 'nine'; break;
			default: result = 'not a digit';
		}			
		console.log('\tThe digit ' + arr[ii] + ' is: ' + result);
	}
};// end of function

//Problem 6
function sixthProblem(){
	console.log('\nProblem 6');
	var values = {
		1: {a: 2, b: 5, c: -3},
		2: {a: -1, b: 3, c: 0},
		3: {a: -0.5, b: 4, c: -8},
		4: {a: 5, b: 2, c: 8}
	},
		D = '',
		doubleRoot = '',
		secondRoot = '',
		result = '',
		firstRoot = '';
	for(var item in values) {
		D = values[item].b * values[item].b - 4 * values[item].a * values[item].c;
		doubleRoot = -values[item].b / (2 * values[item].a);
		firstRoot = (-values[item].b - Math.sqrt(D)) / (2 * values[item].a);
		secondRoot = (-values[item].b + Math.sqrt(D)) / (2 * values[item].a);
		if(D < 0) {
			result = values[item].a + 'x^2 + ' + values[item].b + 'x + ' + values[item].c + ' has no real roots.';
		} else if(D = 0) {
			result = values[item].a + 'x^2 + ' + values[item].b + 'x + ' + values[item].c + 
					' has one double root x1=x2=' + doubleRoot;
		} else {
			result = values[item].a + 'x^2 + ' + values[item].b + 'x + ' + values[item].c + 
					' has two roots x1=' + firstRoot + ' and x2=' + secondRoot;
		}
		console.log('\t' + result);
	}
};// end of function

//Problem 7
function seventhProblem(){
	console.log('\nProblem 7');
	var values = {
		1: {a: 5, b: 2, c: 2, d: 4, e: 1},
		2: {a: -2, b: -22, c: 1, d: 0, e: 0},
		3: {a: -2, b: 4, c: 3, d: 2, e: 0},
		4: {a: 0, b: -2.5, c: 0, d: 5, e: 5},
		5: {a: -3, b: -0.5, c: -1.1, d: -2, e: -0.1}
	}, 
		result = '';
	for(var item in values){
		if(values[item].a < values[item].b){
			if(values[item].b < values[item].c){
				if(values[item].c < values[item].d){
					if(values[item].d < values[item].e){
						result = values[item].e;
					} else {
						result = values[item].d;
					}
				} else if(values[item].c < values[item].e){
					result = values[item].e;
				} else {
					result = values[item].c;
				}
			} else if(values[item].b < values[item].d){
				if(values[item].d < values[item].e){
					result = values[item].e;
				} else {
					result = values[item].d;
				}
			} else if(values[item].b < values[item].e){
				result = values[item].e;
			} else {
				result = values[item].b;
			}
		} else if(values[item].a < values[item].c){
			if(values[item].c < values[item].d){
				if(values[item].d < values[item].e){
					result = values[item].e;
				} else {
					result = values[item].d;
				}
			} else if(values[item].c < values[item].e){
				result = values[item].e;
			} else {
				result = values[item].c;
			}
		} else if(values[item].a < values[item].d){
			if(values[item].d < values[item].e){
				result = values[item].e;
			} else {
				result = values[item].d;
			}
		} else if(values[item].a < values[item].e){
			result = values[item].e;
		} else {
			result = values[item].a;
		}
				
		console.log('\tThe biggest of ' + values[item].a + ', ' + values[item].b + ', ' + values[item].c +
				', ' + values[item].d + ' and ' + values[item].e + ' is ' + result);
	}
};// end of function


//Problem 8
function eighthProblem(){
	console.log('\nProblem 8');
	var arr = [0, 9, 10, 12, 19, 25, 98, 98, 273, 400, 501, 617, 711, 999],
		ones = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven',
				' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', 
				' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
		tens = [' ', ' ', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
		ii = 0,
		len = arr.length,
		result = '';
		
		for(ii; ii < len; ii+=1){
			if(arr[ii] < 20){
				result = ones[arr[ii]];
			} else if((arr[ii] % 10) === 0 && arr[ii] > 19 && arr[ii] < 100){
				result = tens[arr[ii]/10];
			} else if((arr[ii] % 10) !== 0 && arr[ii] > 19 && arr[ii] < 100){
				result = tens[Math.floor(arr[ii]/10 % 10)] + ones[Math.floor(arr[ii]/1 % 10)];
			} else if((arr[ii] % 100) === 0 && arr[ii] > 99 && arr[ii] < 1000){
				result = ones[arr[ii]/100] + ' hundred ';		
			} else if((arr[ii] % 10) !== 0 && arr[ii] > 100 && arr[ii] < 1000){
				result = ones[Math.floor(arr[ii]/100)] + ' hundred and' +
						tens[Math.floor(arr[ii]/10 % 10)] + ones[Math.floor(arr[ii]/1 % 10)];
			}
			console.log('\tThe number "' + arr[ii] + '" is ' + result);
		}
};// end of function
