import { Directory } from './Directory';
import { File } from './File';

/**
 * Get the sum of the directory sizes whose sizes are at least at most {@code sizeThreshold}.
 *
 * https://adventofcode.com/2022
 *
 * @param cliLog The list of directory exploration commands that expose the directories and sizes.
 * @param sizeThreshold The maxium size of directory for inclusion in the sum
 * @returns The sum
 */
export function getSumDirectories(cliLog: string[], sizeThreshold: number): number {
  const root = buildFileSystem(cliLog);
  let sum = 0;

  calculateSize(root, (name, size) => {
    if (size <= sizeThreshold) {
      sum += size;
    }
  });

  return sum;
}

/**
 * Choose a directory to delete that is the best fit for clearing the appropriate amount of space.
 *
 * @param cliLog The list of directory exploration commands that expose the directories and sizes.
 * @param totalDiskSpace The total disk space of the device
 * @param minFreeSpace The minimum required free space after removing a single directory
 * @returns The size of the directory that should be deleted
 */
export function chooseDirToDelete(cliLog: string[], totalDiskSpace: number, minFreeSpace: number): number {
  const root = buildFileSystem(cliLog);
  const dirs: number[] = [];

  calculateSize(root, (name, size) => dirs.push(size));

  let bestSize = root.size!;
  const freeSpace = totalDiskSpace - (root.size || 0);

  dirs.forEach(d => {
    if (d + freeSpace > minFreeSpace && d < bestSize) {
      bestSize = d;
    }
  });

  return bestSize;
}

/**
 * Parse a list of commands and outputs that were executed in a CLI, and return the root directory.
 *
 * @param cliLog The list of directory exploration commands that expose the directories and sizes.
 * @returns The root {@code Directory} that represent '/'
 */
function buildFileSystem(cliLog: string[]): Directory {
  if (cliLog[0] !== '$ cd /') {
    throw new Error(`Unexpected start command ${cliLog[0]}`);
  }

  const root = new Directory('/', null);
  let currentDir: Directory = root;

  cliLog.forEach(line => {
    if (line.startsWith('$ cd')) {
      const dir = line.slice(5);
      if (dir === '/') {
        currentDir = root;
      } else if (dir === '..') {
        currentDir = currentDir.parent || root;
      } else {
        const nextDir = currentDir.children.find(c => c.name === dir);
        if (!nextDir) {
          throw new Error(`Could not find ${dir} from ${currentDir.name}`);
        } else if (!(nextDir instanceof Directory)) {
          throw new Error(`Tried to cd into a File ${dir} from ${currentDir.name}`);
        }

        currentDir = nextDir;
      }
    } else if (line === '$ ls') {
      // Do nothing
    } else if (line.startsWith('dir')) {
      const [, name] = line.split(' ');
      if (!name) {
        throw new Error(`Invalid directory line ${line}`);
      }
      currentDir.children.push(new Directory(name, currentDir));
    } else {
      const [size, name] = line.split(' ');

      if (!name || !size) {
        throw new Error(`Invalid file definition ${line}`);
      }

      currentDir.children.push(new File(name, Number(size)));
    }
  });

  return root;
}

/**
 * Given the root directory of a filesystem, calculate the size the directory and all child directories
 * recursively. Modifies the 'size' property of all directories in the file system.
 *
 * @param root The root {@code Directory}
 * @param postCalcCallback A function to call after each directory has been processed
 */
function calculateSize(root: Directory, postCalcCallback?: (name: string, nodeSize: number) => void): void {
  root.children.forEach(c => {
    if (c instanceof File) {
      root.size = root.size ? (root.size += c.size) : c.size;
    } else {
      calculateSize(c, postCalcCallback);
      if (c.size === null) {
        throw new Error(`Failed to calculate size for ${c.name}`);
      }
      root.size = root.size ? (root.size += c.size) : c.size;
    }
  });

  if (postCalcCallback !== undefined) {
    postCalcCallback(root.name, root.size || 0);
  }
}
