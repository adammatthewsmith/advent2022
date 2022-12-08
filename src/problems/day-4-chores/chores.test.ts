import { expect } from 'chai';
import { readLines } from '../../util/input';
import { calculateAnyOverlap, calulculateTotalOverlap } from './chores';

const PATH_TO_FILES = './src/problems/day-4-chores';

describe('chores', () => {
  describe('calculateOverlaps', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(calulculateTotalOverlap(input)).to.equal(2);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(calulculateTotalOverlap(input)).to.equal(471);
    });
  });

  describe('calculateTotalOverlap', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(calculateAnyOverlap(input)).to.equal(4);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(calculateAnyOverlap(input)).to.equal(888);
    });
  });
});
