/**
 * Basic priority queue data model for holding the top maxSize integers.
 */
export class SimplePriorityQueue {
  /**
   * A list for holding the queue items.
   */
  private list: number[] = [];

  /**
   * Constructor for the SimplePriorityQueue.
   *
   * @param maxSize The maximum number of items in the queue.
   */
  constructor(private maxSize: number) {}

  /**
   * Attempt to insert an item into the queue. The item is only added if it is in the
   * top maxSize highest items in the queue.
   *
   * @param num the item to add.
   */
  insert(num: number): void {
    let index = 0;

    while (this.list[index] !== undefined && num > this.list[index]!) {
      index++;
    }

    this.list.splice(index, 0, num);
    this.list = this.list.splice(-this.maxSize);
  }

  /**
   * Get a copy of the items in the queue.
   *
   * @returns a copy of the current list
   */
  getItems(): number[] {
    return [...this.list];
  }
}
