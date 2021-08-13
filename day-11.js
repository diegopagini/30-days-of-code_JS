/**
 *
 * https://www.hackerrank.com/challenges/30-2d-arrays/problem
 *
 * @format
 */
function main() {
	let arr = Array(6);

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}

	console.log(hourglassSum(arr));
}

function hourglassSum(arr) {
	let max = -63;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			let sum = 0;
			sum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			max = max < sum ? sum : max;
		}
	}
	return max;
}
