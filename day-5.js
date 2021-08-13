/**
 *
 * https://www.hackerrank.com/challenges/30-loops/problem
 *
 * @format
 */

function main() {
	const n = parseInt(readLine().trim(), 10);
	for (let i = 1; i <= 10; i++) {
		let result = n * i;
		console.log(`${n} x ${i} = ${result}`);
	}
}
