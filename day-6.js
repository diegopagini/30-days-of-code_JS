/**
 *
 * https://www.hackerrank.com/challenges/30-review-loop/problem
 *
 * @format
 */

function processData(input) {
	message = input.split('\n');

	let n = parseInt(message[0]);

	for (let i = 0; i < n; i++) {
		let m = message[i + 1];
		let l = m.length;
		let arr = m.split('');
		let ra = '';
		let rb = '';

		for (let j = 0; j < l; j++) {
			if (j % 2 === 0) ra = ra + arr[j];
			else rb = rb + arr[j];
		}
		console.log(ra + ' ' + rb);
	}
}
