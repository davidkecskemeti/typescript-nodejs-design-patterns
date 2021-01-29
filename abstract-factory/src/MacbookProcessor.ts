import IProcessor from "./IProcessor";
import IStorage from "./IStorage";

export default class MacBookProcessor implements IProcessor {
  storage: string | undefined;

  MacbookProcessor() {
    console.log("Macbook is build using apple silicon chips");
  }

  attachStorage(storage: IStorage): string {
    this.storage = storage.getStorageType();
    console.log("storageAttached", storage.getStorageType());
    return this.storage + " Attached to Macbook";
  }
  showSpecs(): string {
    return this.toString();
  }

  toString(): string {
    return "AppleProcessor is created using Apple Silicon and " + this.storage;
  }
}
