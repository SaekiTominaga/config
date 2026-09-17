export class Rectangle {
	width: number;

	constructor(width: number) {
		this.width = width;
	}

	getAreaFunction() {
		return () => this.width;
	}
}
