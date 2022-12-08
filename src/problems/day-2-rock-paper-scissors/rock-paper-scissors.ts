/**
 * An enum describing possible results, and their score values.
 */
enum RoundResult {
  LOSE = 0,
  DRAW = 3,
  WIN = 6
}

/**
 * Types describing possible moves for P1 and P2.
 */
type P1Move = 'A' | 'B' | 'C';
type P2Move = 'X' | 'Y' | 'Z';

/**
 * An interface for storing the moves of P1 and P2.
 */
interface RoundStrategy {
  p1: P1Move;
  p2: P2Move;
}

// Configuration for the Result (LOSE, WIN, DRAW) between different P1 and P2 moves.
const MOVES_TO_RESULTS: Record<P1Move, Record<P2Move, RoundResult>> = {
  // Rock
  A: {
    // Rock - Rock
    X: RoundResult.DRAW,
    // Rock - Paper
    Y: RoundResult.WIN,
    // Rock - Scissors
    Z: RoundResult.LOSE
  },
  // Paper
  B: {
    // Paper - Rock
    X: RoundResult.LOSE,
    // Paper - Paper
    Y: RoundResult.DRAW,
    // Paper - Scissors
    Z: RoundResult.WIN
  },
  // Scissors
  C: {
    // Scissors - Rock
    X: RoundResult.WIN,
    // Scissors - Paper
    Y: RoundResult.LOSE,
    // Scissors - Scissors
    Z: RoundResult.DRAW
  }
};

/**
 * Helper for getting the score for a result.
 *
 * @param roundStrat The RoundStrategy whose result should be calculated (for P2)
 * @returns The score
 */
function getResultScore(roundStrat: RoundStrategy): RoundResult {
  return MOVES_TO_RESULTS[roundStrat.p1][roundStrat.p2];
}

/**
 * Helper for getting the score for P2's move.
 *
 * @param move P2's move
 * @returns The score
 */
function getMoveScore(move: P2Move) {
  switch (move) {
    case 'X':
      return 1;
    case 'Y':
      return 2;
    case 'Z':
      return 3;
    default:
      throw new Error(`Invalid move ${move}`);
  }
}

/**
 * Parse the "<p1> <p2>" string into something more clear.
 *
 * @param strat The string representation of the round.
 * @returns A RoundStrategy
 */
function parseRound(strat: string): RoundStrategy {
  const [p1, p2] = strat.split(' ');

  if (isValidP1Move(p1) && isValidP2Move(p2)) {
    return { p1, p2 };
  }

  throw new Error(`Invalid round: ${strat}`);
}

/**
 * Type guard for parsing strings for P1's moves.
 *
 * @param str The P1 move
 * @returns true if it is a valid move, false otherwise
 */
function isValidP1Move(str: string | undefined): str is P1Move {
  return str !== undefined && ['A', 'B', 'C'].includes(str);
}

/**
 * Type guard for parsing strings for P2's moves.
 *
 * @param str The P2 move
 * @returns true if it is a valid move, false otherwise
 */
function isValidP2Move(str: string | undefined): str is P2Move {
  return str !== undefined && ['X', 'Y', 'Z'].includes(str);
}

/**
 * Calculate the total strategy score for p2 according to https://adventofcode.com/2022/day/2.
 * Given a list of "<p1 move> <p2 move>" strategy pairs, calculate the total score for p2's
 * strategy. Each pair is scored for the p2 move itself (X=1, Y=2, Z=3) and the outcome
 * (lose=0, draw=3, win=6). Outcome is calculated using RPC classic rules. Moves are encrypted.
 *
 * A = p1 Rock
 * B = p1 Paper
 * C = p1 Scissors
 * X = p2 Rock
 * Y = p2 Paper
 * Z = p2 Scissors
 *
 * @param strat A list of "<p1 move> <p2 move>" strategy pairs
 */
export function calculateStrategyScoreForTwoMoves(strats: string[]): number {
  let myScore = 0;

  strats.forEach((round: string) => {
    const strat: RoundStrategy = parseRound(round);
    myScore += getMoveScore(strat.p2);
    myScore += getResultScore(strat);
  });

  return myScore;
}
