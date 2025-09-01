import { exportSample } from './@export-sample-ts.ts';
import fs from 'node:fs';

await fs.promises.access('path');
export default exportSample;
