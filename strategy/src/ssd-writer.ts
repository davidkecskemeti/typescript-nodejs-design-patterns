import IFileWriter from "./I-file-writer";

export default class SSDWriter implements IFileWriter {
  write(filepath: string | undefined): boolean {
    console.log("Writing File to SSD");
    return true;
  }
}
