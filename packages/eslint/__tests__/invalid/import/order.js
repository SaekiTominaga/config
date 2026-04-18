import { exportSample } from '../@export-sample-js.js';
import fs from 'node:fs';

await fs.promises.access('path');
export default exportSample;
