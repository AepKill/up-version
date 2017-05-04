import { packJsonPath } from './args';
import { upVersion } from './utils';
import { writeFileSync } from 'fs';
import indent from './utils/indent';

console.log(`up-version: ${packJsonPath}`);

// tslint:disable-next-line:no-var-requires
const packageJson: { version?: string } = require(packJsonPath);

packageJson.version = upVersion(packageJson.version || '0.0.0');

writeFileSync(packJsonPath, JSON.stringify(packageJson, null, indent(packJsonPath)));
