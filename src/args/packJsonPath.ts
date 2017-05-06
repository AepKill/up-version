import { argv } from 'yargs';
import { join, resolve } from 'path';

let packagejsonPath = (argv.path && argv.path.trim()) || 'package.json';

if (!/package.json$/.test(packagejsonPath)) {
  packagejsonPath = join(packagejsonPath, 'package.json');
}

export default resolve(process.cwd(), packagejsonPath);
