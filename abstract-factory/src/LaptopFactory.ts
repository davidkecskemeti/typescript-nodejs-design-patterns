import IProcessor from "./IProcessor";
import IStorage from "./IStorage";

export default interface LaptopFactory {
  createProcessor(): IProcessor;

  createStorage(): IStorage;
}
