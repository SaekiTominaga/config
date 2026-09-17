// oxlint-disable func-names class-methods-use-this

export class Rectangle {
	width: number;

	constructor(width: number) {
		this.width = width;
	}

	getAreaFunction() {
		return function () {
			return this.width;
		};
	}
}
