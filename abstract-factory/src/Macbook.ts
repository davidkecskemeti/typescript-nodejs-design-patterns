import IProcessor from "./IProcessor";
import IStorage from "./IStorage";
import LaptopFactory from "./LaptopFactory";
import MacBookProcessor from "./MacbookProcessor";
import MacbookStorage from "./MacbookStorage";

export default class Macbook implements LaptopFactory {
  storageSize: number;

  constructor(storage: number) {
    this.storageSize = storage;
  }

  createProcessor(): any {
    return new MacBookProcessor();
  }
  createStorage(): any {
    return new MacbookStorage(this.storageSize);
  }
}
