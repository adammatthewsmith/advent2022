import { FileBase } from './FileBase';

export class File extends FileBase {
  constructor(name: string, public override size: number) {
    super(name, size);
  }
}
