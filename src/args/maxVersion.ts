import { argv } from 'yargs';

const maxVersion = parseInt(argv.max && argv.max.trim(), 10);

export default (isNaN(maxVersion) || maxVersion < 1) ? 99 : maxVersion;
