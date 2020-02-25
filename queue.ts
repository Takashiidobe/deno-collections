/*
 * Queue is a first-in-first-out data structure.
 * Queue supports push on the right and shift on the left.
 *
 * Create by optionally passing an Iterable:
 *
 *      const q = new Queue([1, 2, 3])
 *      console.log(q.shift())  // 1
 *
 */
export class Queue<T> implements Iterable<T> {
  private _array: T[];
  constructor(ls?: Iterable<T>) {
    this._array = ls ? [...ls] : [];
  }
  clear(): void {
    this._array = [];
  }
  shift(): T | undefined {
    return this._array.shift();
  }
  push(value: T): void {
    this._array.push(value);
  }
  get size(): number {
    return this._array.length;
  }

  [Symbol.iterator]() {
    return this._array[Symbol.iterator]();
  }
}
