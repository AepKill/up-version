import { argv } from 'yargs';

export const beforeRun = argv.before && argv.before.trim();

export const afterRun = argv.after && argv.after.trim();
