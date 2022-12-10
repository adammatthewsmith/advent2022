import { expect } from 'chai';
import { readLines } from '../../util/input';
import { chooseDirToDelete, getSumDirectories } from './device-space';

const PATH_TO_FILES = './src/problems/day-7-device-space';

describe('chores', () => {
  describe('getSomeDirectories 100000', () => {
    const sizeThreshold = 100000;

    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`, false);

      expect(getSumDirectories(input, sizeThreshold)).to.equal(95437);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(getSumDirectories(input, sizeThreshold)).to.equal(1297683);
    });
  });

  describe('chooseDirToDelete', () => {
    const totalDiskSpace = 70000000;
    const minFreeSpace = 30000000;

    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`, false);

      expect(chooseDirToDelete(input, totalDiskSpace, minFreeSpace)).to.equal(24933642);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(chooseDirToDelete(input, totalDiskSpace, minFreeSpace)).to.equal(5756764);
    });
  });
});
