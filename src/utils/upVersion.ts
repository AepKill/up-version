import { maxVersion } from '../args/index';

/**
 * 升级 version 字段的版本
 *
 * @export
 * @param {string} version
 * @returns
 * @example
 * upVersion('0.0.0') //=> 0.0.1
 * upVersion('0.0.99') //=> 0.1.0
 * upVersion('99.99.99') //=> throw RangeError
 */
export default function(version: string) {
  const littleVersions = version.split('.').map(value => {
    if (/^\d+$/.test(value)) {
      return + value;
    }
    throw new Error(`version field illegal: ${version}`);
  });
  for (let i = littleVersions.length - 1; i >= 0; i--) {
    littleVersions[i]++;
    if (littleVersions[i] > maxVersion) {
      if (i == 0) {
        throw new RangeError('Max Version');
      }
      littleVersions[i] = 0;
    } else {
      break;
    }
  }
  return littleVersions.join('.');
}
