// oxlint-disable max-classes-per-file

class Album {
	readonly foo = 'abc';

	setup() {
		return this.foo;
	}
}

class MLAlbum extends Album {
	override setup() {
		return this.foo;
	}
}

class SharedAlbum extends Album {
	override setup() {
		return this.foo;
	}
}

export { Album, MLAlbum, SharedAlbum };
