/**
 * A class for representing moving {@code amount} crates from stack {@code from}
 * to stack {@code to}.
 */
export class Move {
  /**
   * Construct a {@code Move}.
   *
   * @param from The source stack
   * @param to The target stack
   * @param amount The number of crates to move
   */
  constructor(public from: number, public to: number, public amount: number) {}

  /**
   * Parse a string that represents a {@code Move} and return the object.
   *
   * @param move A string of the form "Move x from y to z" where x, y, and z are numbers.
   * @throws If 3 integers are not found in the string
   * @returns A {@code Move}
   */
  static from(move: string): Move {
    const currentLineMatches = move.match(/\d+/g);
    if (currentLineMatches === undefined || currentLineMatches?.length !== 3) {
      throw new Error(`Did not find expected move structure: ${move}`);
    }

    const [numToMoveStr, srcStr, targetStr] = currentLineMatches;

    const amount = Number(numToMoveStr);
    const from = Number(srcStr) - 1;
    const to = Number(targetStr) - 1;

    return new Move(from, to, amount);
  }
}
