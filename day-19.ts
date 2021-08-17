/**
 *
 * https://www.hackerrank.com/challenges/30-interfaces/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 *
 * @format
 */
interface AdvancedArithmetic {
	divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
	divisorSum(n: number): number {
		let sum: number = 0;

		for (let i: number = 1; i <= n; i++) {
			if (n % i == 0) {
				sum += i;
			}
		}
		return sum;
	}
}
