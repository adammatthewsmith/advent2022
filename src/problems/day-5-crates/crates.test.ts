import { expect } from 'chai';
import { readLines } from '../../util/input';
import { getCrateLocations9000, getCrateLocations9001 } from './crates';

const PATH_TO_FILES = './src/problems/day-5-crates';

describe('chores', () => {
  describe('getCrateLocations9000', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`, false);

      expect(getCrateLocations9000(input)).to.equal('CMZ');
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(getCrateLocations9000(input)).to.equal('CWMTGHBDW');
    });
  });

  describe('getCrateLocations9001', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`, false);

      expect(getCrateLocations9001(input)).to.equal('MCD');
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(getCrateLocations9001(input)).to.equal('SSCGWJCRB');
    });
  });
});
