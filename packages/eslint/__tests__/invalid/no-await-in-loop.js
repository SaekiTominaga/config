import fs from 'node:fs';

// eslint-disable-next-line functional/no-loop-statements
for (const item of ['path1', 'path2']) {
	await fs.promises.access(item);
}
