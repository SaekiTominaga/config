export const fn = (settings: { speed: string; quality: string; [key: string]: string }) => {
	const speed1 = settings.speed;
	const quality1 = settings.quality;
	const username1 = settings['username'];

	return { speed1, quality1, username1 };
};
