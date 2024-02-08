{
	const settings: GameSettings = { speed: 'fast', quality: 'high' };
	settings.speed;
	settings.quality;

	// Unknown key accessors are allowed on
	// this object, and are `string`
	settings.username;
}
