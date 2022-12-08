import { expect } from 'chai';
import { SimplePriorityQueue } from './SimplePriorityQueue';

describe('SimplePriorityQueue', () => {
  it('inserts when the queue is empty', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);

    expect(q.getItems()).to.eql([1]);
  });

  it('inserts when the item should be added to the back of the list and there is more space', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);
    q.insert(2);

    expect(q.getItems()).to.eql([1, 2]);
  });

  it('inserts when the item should be the last item', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);
    q.insert(2);
    q.insert(3);

    expect(q.getItems()).to.eql([1, 2, 3]);
  });

  it('does not insert when the queue is full and the item is not higher', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(2);
    q.insert(3);
    q.insert(4);
    q.insert(1);

    expect(q.getItems()).to.eql([2, 3, 4]);
  });

  it('correctly drops the first item when the inserted item is higher than 1 item', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);
    q.insert(3);
    q.insert(4);
    q.insert(2);

    expect(q.getItems()).to.eql([2, 3, 4]);
  });

  it('correctly drops the first item when the inserted item is higher than 2 items', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);
    q.insert(2);
    q.insert(4);
    q.insert(3);

    expect(q.getItems()).to.eql([2, 3, 4]);
  });

  it('correctly drops the first item when the inserted item is higher than all items', () => {
    const q = new SimplePriorityQueue(3);

    q.insert(1);
    q.insert(2);
    q.insert(3);
    q.insert(4);

    expect(q.getItems()).to.eql([2, 3, 4]);
  });
});
