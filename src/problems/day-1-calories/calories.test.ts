import { expect } from 'chai';
import { readLines } from '../../util/input';
import { gnomeMostCalories, threeGnomesMostCalories } from './calories';

const PATH_TO_FILES = './src/problems/day-1-calories';

describe('calories', () => {
  describe('gnomeMostCalories', () => {
    it('should return the correct answer for the sample input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(gnomeMostCalories(input)).to.equal(24000);
    });

    it('should return the correct answer for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(gnomeMostCalories(input)).to.equal(71924);
    });
  });

  describe('threeGnomesMostCalories', () => {
    it('should return the correct answer for the sample input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput.txt`);

      expect(threeGnomesMostCalories(input)).to.equal(45000);
    });

    it('should return the correct answer for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`);

      expect(threeGnomesMostCalories(input)).to.equal(210406);
    });
  });
});
