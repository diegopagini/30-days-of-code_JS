/**
 *
 * https://www.hackerrank.com/challenges/30-sorting/problem
 *
 * @format
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const n = parseInt(readLine().trim(), 10);

	const a = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((aTemp) => parseInt(aTemp, 10));

	// Write Your Code Here
	let numberOfSwaps = 0;

	const bubbleSort = (values) => {
		let swapped;

		do {
			swapped = false;

			for (let i = 0, { length } = values; i < length; i++) {
				if (values[i] > values[i + 1]) {
					let tmp = values[i];

					values[i] = values[i + 1];
					values[i + 1] = tmp;

					swapped = true;
					numberOfSwaps++;
				}
			}
		} while (swapped);

		return values;
	};

	let result = bubbleSort(a);

	console.log(
		`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${
			result[0]
		}\nLast Element: ${result[n - 1]}`
	);
}
