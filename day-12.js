/**
 *
 * https://www.hackerrank.com/challenges/30-inheritance/problem
 *
 * @format
 */
class Student extends Person {
	constructor(firstName, lastName, idNumber, testScores) {
		super(firstName, lastName, idNumber);
		this.testScores = testScores;
	}
	calculate() {
		let average = 0;
		let sum = 0;
		let grade = '';
		for (let i = 0, length = this.testScores.length; i < length; i++) {
			sum += this.testScores[i];
		}
		average = sum / this.testScores.length;
		if (90 <= average && average <= 100) {
			grade = 'O';
		} else if (80 <= average && average < 90) {
			grade = 'E';
		} else if (70 <= average && average < 80) {
			grade = 'A';
		} else if (55 <= average && average < 70) {
			grade = 'P';
		} else if (40 <= average && average < 55) {
			grade = 'D';
		} else {
			grade = 'T';
		}
		return grade;
	}
}
