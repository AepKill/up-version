import { packJsonPath, afterRun, beforeRun } from './args';
import { upVersion } from './utils';
import { writeFileSync } from 'fs';
import indent from './utils/indent';
import { execSync } from 'child_process';

export function upPackVersionAndShowPath(path = packJsonPath) {
  console.log(`up-version: ${path}`);
  upPackVersion(path);
}

export default function upPackVersion(path = packJsonPath) {

  if (beforeRun) {
    console.log(execSync(`npm run ${beforeRun}`, { encoding: 'utf8' }));
  }

  // tslint:disable-next-line:no-var-requires
  const packageJson: { version?: string } = require(path);

  packageJson.version = upVersion(packageJson.version || '0.0.0');

  writeFileSync(path, JSON.stringify(packageJson, null, indent(path)));

  if (afterRun) {
    console.log(execSync(`npm run ${afterRun}`, { encoding: 'utf8' }));
  }

}
