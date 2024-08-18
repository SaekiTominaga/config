import { foo } from '../../valid/import/@export-sample.js'; // import/no-duplicates
import { foo as foo2 } from '../../valid/import/@export-sample.js'; // import/no-duplicates

export const bar1 = foo();
export const bar2 = foo2();
