/**
 *
 * https://www.hackerrank.com/challenges/30-recursion/problem
 *
 * @format
 */
function processData(input) {
	console.log(factorial(input));
}

function factorial(n) {
	if (n === 0) return 1;
	else return n * factorial(n - 1);
}
