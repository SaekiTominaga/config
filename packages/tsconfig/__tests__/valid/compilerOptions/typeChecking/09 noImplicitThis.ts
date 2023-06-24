class Rectangle {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	getAreaFunction() {
		return () => {
			return this.width * this.height;
		};
	}
}
