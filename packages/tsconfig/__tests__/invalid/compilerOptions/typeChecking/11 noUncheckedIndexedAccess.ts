{
	// Declared as existing
	const sysName = env.NAME;
	const os = env.OS;

	// Not declared, but because of the index
	// signature, then it is considered a string
	const nodeEnv = env['NODE_ENV'];

	console.debug(sysName.trim(), os.trim(), nodeEnv.trim());
}
