import { packJsonPath, afterRun, beforeRun } from './args';
import { upVersion } from './utils';
import { writeFileSync } from 'fs';
import indent from './utils/indent';
// tslint:disable-next-line:no-var-requires
const spawn = require('cross-spawn');

export function upPackVersionAndShowPath(path = packJsonPath) {
  console.log(`up-version: ${path}`);
  upPackVersion(path);
}

export default function upPackVersion(path = packJsonPath) {

  if (beforeRun) {
    spawn.sync(`npm`, ['run', beforeRun], { stdio: 'inherit' });
  }

  // tslint:disable-next-line:no-var-requires
  const packageJson: { version?: string } = require(path);

  packageJson.version = upVersion(packageJson.version || '0.0.0');

  writeFileSync(path, JSON.stringify(packageJson, null, indent(path)));

  if (afterRun) {
    spawn.sync(`npm`, ['run', afterRun], { stdio: 'inherit' });
  }

}
