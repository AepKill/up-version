import { readFileSync } from 'fs';

export const defaultIndent = 2;

export const maxIndent = 8;

/**
 * 获取一个文本文件的缩进
 *
 * @export
 * @param {string} filePath
 * @returns
 */
export default function indent(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');
  const matchs = content.match(/^( +)[^\n]+$/m);
  let indent = defaultIndent;
  if (matchs) {
    indent = (matchs[1] && matchs[1].length) || defaultIndent;
  }
  if (indent >= maxIndent) {
    return maxIndent;
  }
  return indent;
}
