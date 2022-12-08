/**
 * A class for handling the output of regex matching the string representation of a block location
 * in the "drawing" representation of the crates.
 *
 * See {@code testInput.txt} for a sample.
 */
export class BlockMatchInfo {
  label: string;
  stack: number;

  /**
   * Given a {@code RegExpMatchArray}, construct the {@code BlockMatchInfo} object.
   * @param match The regex match for a block in a string
   */
  constructor(match: RegExpMatchArray) {
    if (!match[0] || match.index === undefined) {
      throw new Error(`Invalid block match ${match}`);
    }

    this.label = match[0].charAt(1);
    this.stack = (match.index + 4) / 4 - 1;
  }
}
