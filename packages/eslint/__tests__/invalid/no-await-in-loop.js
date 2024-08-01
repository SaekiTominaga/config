import fs from 'node:fs';

for (const item of ['path1', 'path2']) {
	await fs.promises.access(item);
}
