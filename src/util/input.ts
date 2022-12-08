import * as fs from 'fs/promises';

/**
 * Read in the files specified by path and return a list of strings, where each
 * item in the list is a line in the file.
 *
 * @param path a path to the file whose lines should be read
 * @param [trim = true] whether to trip each line's whitespace
 */
export async function readLines(path: string, trim = true): Promise<string[]> {
  const data = await fs.readFile(path, { encoding: 'utf8' });
  const splitData = data.split(/\n/);

  if (!trim) {
    return splitData;
  }

  return splitData.map(s => s.trim());
}
