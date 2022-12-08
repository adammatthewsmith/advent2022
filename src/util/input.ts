import * as fs from 'fs/promises';

/**
 * Read in the files specified by path and return a list of strings, where each
 * item in the list is a line in the file.
 *
 * @param path a path to the file whose lines should be read
 */
export async function readLines(path: string): Promise<string[]> {
  const data = await fs.readFile(path, { encoding: 'utf8' });
  return data.split(/\n/).map(s => s.trim());
}
