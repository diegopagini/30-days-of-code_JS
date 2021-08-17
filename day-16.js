/**
 *
 * https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem
 *
 * @format
 */

function main() {
	const S = readLine();

	try {
		console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
	} catch (e) {
		console.log('Bad String');
	}
}
