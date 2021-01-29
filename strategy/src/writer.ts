import IFileWriter from "./I-file-writer";

export default class Writer {
  protected writer: IFileWriter;

  constructor(writer: IFileWriter) {
    this.writer = writer;
  }

  write(filepath: string): boolean {
    return this.writer.write(filepath);
  }
}
