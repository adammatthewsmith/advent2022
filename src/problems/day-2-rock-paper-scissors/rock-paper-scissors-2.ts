/**
 * An enum describing possible p2 moves, and their score values.
 */
enum P2Move {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3
}

// rock, paper, scissors
type P1Move = 'A' | 'B' | 'C';

// lose, draw, win
type IntendedResult = 'X' | 'Y' | 'Z';

/**
 * An interface for storing the move of P1 and the intended result for p2.
 */
interface RoundStrategy {
  p1: P1Move;
  result: IntendedResult;
}

// Configuration for the Result (LOSE, WIN, DRAW) between different P1 and P2 moves.
const P1_MOVE_AND_RESULT_TO_P2_MOVE: Record<P1Move, Record<IntendedResult, P2Move>> = {
  // Rock
  A: {
    // Rock - Lose
    X: P2Move.SCISSORS,
    // Rock - Draw
    Y: P2Move.ROCK,
    // Rock - Win
    Z: P2Move.PAPER
  },
  // Paper
  B: {
    // Paper - Lose
    X: P2Move.ROCK,
    // Paper - Draw
    Y: P2Move.PAPER,
    // Paper - Win
    Z: P2Move.SCISSORS
  },
  // Scissors
  C: {
    // Scissors - Lose
    X: P2Move.PAPER,
    // Scissors - Draw
    Y: P2Move.SCISSORS,
    // Scissors - Win
    Z: P2Move.ROCK
  }
};

/**
 * Helper for getting the score for a result.
 *
 * @param result The IntendedResult whose result should be returned (for P2)
 * @returns The score
 */
function getResultScore(result: IntendedResult): number {
  switch (result) {
    case 'X':
      return 0;
    case 'Y':
      return 3;
    case 'Z':
      return 6;
    default:
      throw new Error(`Invalid result ${result}`);
  }
}

/**
 * Helper for getting calculating P2's move and getting the score.
 *
 * @param strat The summary of the round including p1's move and the intended p2 result
 * @returns The score
 */
function getMoveScore(strat: RoundStrategy) {
  return P1_MOVE_AND_RESULT_TO_P2_MOVE[strat.p1][strat.result];
}

/**
 * Parse the "<p1> <result>" string into something more clear.
 *
 * @param strat The string representation of the round.
 * @returns A RoundStrategy
 */
function parseRound(strat: string): RoundStrategy {
  const [p1, result] = strat.split(' ');

  if (isValidP1Move(p1) && isValidResult(result)) {
    return { p1, result };
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
function isValidResult(str: string | undefined): str is IntendedResult {
  return str !== undefined && ['X', 'Y', 'Z'].includes(str);
}

/**
 * Calculate the total strategy score for p2 according to https://adventofcode.com/2022/day/2.
 * Given a list of "<p1 move> <intended p2 result>" strategy pairs, calculate the total score for p2's
 * strategy. Each pair is scored for the p2 move itself (Rock=1, Paper=2, Scissors=3) and the outcome
 * (lose=0, draw=3, win=6). Outcome is calculated using RPC classic rules. P1s moves are encrypted.
 *
 * A = p1 Rock
 * B = p1 Paper
 * C = p1 Scissors
 *
 * P2s intended outcome is encrypted
 * X = p2 loses
 * Y = p2 draws
 * Z = p2 Wins
 *
 * @param strat A list of "<p1 move> <p2 result>" strategy pairs
 */
export function calculateStrategyScoreForIntendedResult(strats: string[]): number {
  let myScore = 0;

  strats.forEach((round: string) => {
    const strat: RoundStrategy = parseRound(round);
    myScore += getResultScore(strat.result);
    myScore += getMoveScore(strat);
  });

  return myScore;
}
