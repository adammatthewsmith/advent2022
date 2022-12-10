import { FileBase } from './FileBase';
import type { File } from './File';

export class Directory extends FileBase {
  children: Array<Directory | File>;

  constructor(name: string, public parent: Directory | null) {
    super(name);
    this.children = [];
  }
}
