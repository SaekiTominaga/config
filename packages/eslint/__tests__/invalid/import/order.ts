import MyClass from './@recommended.js';
import fs from 'node:fs';

await fs.promises.access('path');
export default new MyClass();
