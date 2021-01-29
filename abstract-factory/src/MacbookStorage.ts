import IStorage from "./IStorage";

export default class MacbookStorage implements IStorage {
  storageSize: number;

  constructor(storageSize: number) {
    this.storageSize = storageSize;
    console.log(this.storageSize + " GB SSD is used");
  }
  getStorageType(): string {
    return this.storageSize + "GB SSD";
  }
}
