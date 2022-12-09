/**
 * Given a sequence of strings, return the number of characters from the start until the
 * end of the first sequence of {@code uniqueSize} unique characters.
 *
 * @param sequence The sequence to test
 * @param uniqueSize The required number of unique characters to detect
 * @returns The number of characters from the start of the sequence to the end of the unique sequence
 */
export function detectSignalMarker(sequence: string, uniqueSize: number): number {
  const runningSet: string[] = [];

  let totalCount = 0;

  for (const char of sequence) {
    totalCount++;

    if (runningSet.includes(char)) {
      runningSet.splice(0, runningSet.indexOf(char) + 1);
    }

    runningSet.push(char);

    if (runningSet.length === uniqueSize) {
      return totalCount;
    }
  }

  throw new Error(`No unique ${uniqueSize} digit sequence detected`);
}
