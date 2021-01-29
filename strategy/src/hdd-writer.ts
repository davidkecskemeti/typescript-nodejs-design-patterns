import IFileWriter from "./I-file-writer";

export default class HDDWriter implements IFileWriter {
  write(filepath: string | undefined): boolean {
    console.log("Writing File to HDD");
    return true;
  }
}
