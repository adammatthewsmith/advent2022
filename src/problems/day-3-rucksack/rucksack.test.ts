import { expect } from 'chai';
import { readLines } from '../../util/input';
import { calulculateBadgePriority, calculateDupePriority } from './rucksack';

const PATH_TO_FILES = './src/problems/day-3-rucksack';

describe('rucksack', () => {
  describe('calculateDupePriority', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(calculateDupePriority(input)).to.equal(157);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(calculateDupePriority(input)).to.equal(7826);
    });
  });

  describe('calulculateBadgePriority', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(calulculateBadgePriority(input)).to.equal(70);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(calulculateBadgePriority(input)).to.equal(2577);
    });
  });
});
