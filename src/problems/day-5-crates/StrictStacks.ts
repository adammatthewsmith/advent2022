import { BlockMatchInfo } from './BlockMatchInfo';

/**
 * A class for tracking the location of crates in a series of stacks.
 */
export class StrictStacks {
  /**
   * Internal list of stacks.
   */
  private stacks: string[][] = [];

  /**
   * Internal strict fetch of a stack.
   * @param index The index of the stack to fetch
   * @throws If no stack exists at the index
   * @returns The stack
   */
  private getStack(index: number): string[] {
    const stack = this.stacks[index];

    if (stack === undefined) {
      throw new Error(`Tried to get undefined stack at inded ${index}`);
    }

    return stack;
  }

  /**
   * Pop the item off of the stack at {@code index}.
   *
   * @param index The index of the stack to pop
   * @throws If the stack does not exist or is empty
   * @returns The popped item
   */
  pop(index: number): string {
    const item = this.getStack(index).pop();

    if (item === undefined) {
      throw new Error(`Tried to pop empty stack at inded ${index}`);
    }

    return item;
  }

  /**
   * Push {@code item} onto the top of the stack at {@code index}.
   *
   * @param index The index of the stack to push {@code item} onto
   * @param item The item to push
   * @throws If there is no stack at {@code index}
   */
  push(index: number, item: string): void {
    if (this.stacks[index] === undefined) {
      this.stacks[index] = [];
    }

    this.getStack(index).push(item);
  }

  /**
   * Unshift {@code item} onto the bottom stack at {@code index}.
   *
   * @param index The index of the stack to unshift {@code item} onto
   * @param item The item to unshift
   * @throws If there is no stack at {@code index}
   */
  unshift(index: number, item: string): void {
    if (this.stacks[index] === undefined) {
      this.stacks[index] = [];
    }

    this.getStack(index).unshift(item);
  }

  /**
   * Get a string comprising the top element of each stack.
   *
   * @returns The string
   */
  tops(): string {
    return this.stacks.map(stack => stack.pop()).join('');
  }

  /**
   * Parse the string representation of the stacked crates and return a {@code StrictStacks} object.
   * See {@code testInput.txt} for a sample.
   *
   * @param drawingLines The string representation
   * @returns The constructed object
   */
  static from(drawingLines: string[]): StrictStacks {
    const stacks = new StrictStacks();

    drawingLines
      .flatMap(line => [...line.matchAll(/\[[A-Z]\]/g)].map(match => new BlockMatchInfo(match)))
      .forEach(block => stacks.unshift(block.stack, block.label));

    return stacks;
  }
}
