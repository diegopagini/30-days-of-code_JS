/**
 *
 * https://www.hackerrank.com/challenges/30-more-exceptions/problem?h_r=next-challenge&h_v=zen
 *
 * @format
 */
let Calculator = function () {
	this.power = function (n, p) {
		try {
			if (n >= 0 && p >= 0) {
				return n ** p;
			} else {
				throw 'n and p should be non-negative';
			}
		} catch (error) {
			return error;
		}
	};
};
