import { expect } from 'chai';
import { readLines } from '../../util/input';
import { calculateStrategyScoreForIntendedResult } from './rock-paper-scissors-2';

const PATH_TO_FILES = './src/problems/day-2-rock-paper-scissors';

describe('rock-paper-scissors', () => {
  describe('calculateStrategyScore', () => {
    it('calculates the correct score for the example input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(calculateStrategyScoreForIntendedResult(input)).to.equal(12);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(calculateStrategyScoreForIntendedResult(input)).to.equal(10334);
    });
  });
});
