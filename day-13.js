/**
 *
 * https://www.hackerrank.com/challenges/30-abstract-classes/problem
 *
 * @format
 */
class MyBook extends Book {
	constructor(title, author, price) {
		super(title, author);

		this.price = price;
	}

	display() {
		console.log(
			`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`
		);
	}
}
