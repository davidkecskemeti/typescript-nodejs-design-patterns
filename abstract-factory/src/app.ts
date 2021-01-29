import IProcessor from "./IProcessor";
import LaptopFactory from "./LaptopFactory";
import Macbook from "./Macbook";
import MacBookProcessor from "./MacbookProcessor";

export const buildLaptop = (laptopFacotry: LaptopFactory): IProcessor => {
  const processor = laptopFacotry.createProcessor();
  const storage = laptopFacotry.createStorage();
  processor.attachStorage(storage);
  return processor;
};

let laptop = buildLaptop(new Macbook(100));
console.log(laptop);
