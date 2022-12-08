import { expect } from 'chai';
import { readLines } from './input';

describe('input', () => {
  describe('readLines', () => {
    it('reads in a file and splits on the lines', async () => {
      const result = await readLines('./src/util/input.test.txt');
      expect(result).to.eql(['Line 1', 'Line 2', 'Line 3']);
    });
  });
});
