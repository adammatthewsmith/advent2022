import { expect } from 'chai';
import { readLines } from '../../util/input';
import { detectSignalMarker } from './tuning';

const PATH_TO_FILES = './src/problems/day-6-tuning';

describe('tuning', () => {
  describe('detectSignalMarker for unique run of 4', () => {
    it('calculates the correct score for the example 0 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput0.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(7);
    });

    it('calculates the correct score for the example 1 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput1.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(5);
    });

    it('calculates the correct score for the example 2 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput2.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(6);
    });

    it('calculates the correct score for the example 3 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput3.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(10);
    });

    it('calculates the correct score for the example 4 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput4.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(11);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(detectSignalMarker(input[0]!, 4)).to.equal(1757);
    });
  });

  describe('detectSignalMarker for unique run of 14', () => {
    it('calculates the correct score for the example 0 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput0.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(19);
    });

    it('calculates the correct score for the example 1 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput1.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(23);
    });

    it('calculates the correct score for the example 2 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput2.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(23);
    });

    it('calculates the correct score for the example 3 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput3.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(29);
    });

    it('calculates the correct score for the example 4 input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/exampleInput4.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(26);
    });

    it('calculates the correct score for the test input', async () => {
      const input = await readLines(`${PATH_TO_FILES}/testInput.txt`, false);

      expect(detectSignalMarker(input[0]!, 14)).to.equal(2950);
    });
  });
});
