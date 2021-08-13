/**
 *
 * https://www.hackerrank.com/challenges/30-operators/problem
 *
 * @format
 */
function solve(meal_cost, tip_percent, tax_percent) {
	const tips = (meal_cost / 100) * tip_percent;
	const tax = (meal_cost / 100) * tax_percent;

	console.log(Math.round(meal_cost + tips + tax));
}
