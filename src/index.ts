import { packJsonPath } from './args';
import { upVersion } from './utils';
import { writeFileSync } from 'fs';
import indent from './utils/indent';

export function upPackVersionAndShowPath(path = packJsonPath) {
  console.log(`up-version: ${path}`);
  upPackVersion(path);
}

export default function upPackVersion(path = packJsonPath) {

  // tslint:disable-next-line:no-var-requires
  const packageJson: { version?: string } = require(path);

  packageJson.version = upVersion(packageJson.version || '0.0.0');

  writeFileSync(path, JSON.stringify(packageJson, null, indent(path)));

}
