/**
 *
 * https://www.hackerrank.com/challenges/30-recursion/problem
 *
 * @format
 */
function main() {
	let n = parseInt(readLine());
	let arr = [];

	while (n !== 0) {
		if (n % 2 === 0) arr.push(0);
		if (n % 2 === 1) arr.push(1);
		n = Math.floor(n / 2);
	}

	let max = 0;
	let cur = 0;

	for (let i = 0, len = arr.length; i < len; i++) {
		if (arr[i] == 1) cur++;
		else if (arr[i] == 0) {
			if (cur > max) max = cur;
			cur = 0;
		}
	}

	if (cur > max) max = cur;

	console.log(max);
}
