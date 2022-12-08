import { Move } from './Move';
import { StrictStacks } from './StrictStacks';

/**
 * Split the problem input into two arrays: one for the "drawing" and one for the moves
 * based on the position of an empty line.
 *
 * @param allLines The full problem definition
 * @returns A tuple containing the drawing lines and moving lines from the problem definition
 */
function splitDrawAndMove(allLines: string[]): [string[], string[]] {
  const emptyLineIndex = allLines.indexOf('');

  const drawingLines = allLines.slice(0, emptyLineIndex);
  const moveLines = allLines.slice(emptyLineIndex + 1);

  return [drawingLines, moveLines];
}

/**
 * Given the starting locations of crates in stacks and a series of moves
 * which are made one crate at a time, calculate the tops of the stacks
 * after all moves have been made.
 *
 * @param setup Lines of string inputs as described at https://adventofcode.com/2022/day/5
 * @returns A string representing the tops of the stacks.
 */
export function getCrateLocations9000(setup: string[]): string {
  const [drawingLines, moveLines] = splitDrawAndMove(setup);
  const stacks = StrictStacks.from(drawingLines);

  moveLines.forEach(moveStr => {
    const move = Move.from(moveStr);

    for (let i = 0; i < move.amount; i++) {
      stacks.push(move.to, stacks.pop(move.from));
    }
  });

  return stacks.tops();
}

/**
 * Given the starting locations of crates in stacks and a series of moves
 * which are made with several crates at a time, calculate the tops of the stacks
 * after all moves have been made.
 *
 * @param setup Lines of string inputs as described at https://adventofcode.com/2022/day/5
 * @returns A string representing the tops of the stacks.
 */
export function getCrateLocations9001(setup: string[]): string {
  const [drawingLines, moveLines] = splitDrawAndMove(setup);
  const stacks = StrictStacks.from(drawingLines);

  moveLines.forEach(moveStr => {
    const move = Move.from(moveStr);
    const craneStack: string[] = [];

    for (let i = 0; i < move.amount; i++) {
      craneStack.unshift(stacks.pop(move.from));
    }

    craneStack.forEach(crate => {
      stacks.push(move.to, crate);
    });
  });

  return stacks.tops();
}
