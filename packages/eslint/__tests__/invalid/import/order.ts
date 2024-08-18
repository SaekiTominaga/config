import { exportSample } from '../../valid/import/@export-sample.js';
import fs from 'node:fs';

await fs.promises.access('path');
export default exportSample;
