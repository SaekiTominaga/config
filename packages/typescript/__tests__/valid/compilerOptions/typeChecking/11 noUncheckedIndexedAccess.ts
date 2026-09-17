export const fn = (env: { NAME: string; OS: string; [propName: string]: string }) => {
	const sysName = env.NAME;
	const os = env.OS;
	const nodeEnv = env['NODE_ENV'];

	return { sysName, os, nodeEnv: nodeEnv?.trim() };
};
