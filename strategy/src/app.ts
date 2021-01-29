import HDDWriter from "./hdd-writer";
import SSDWriterWraper from "./ssd-writer";
import Writer from "./writer";

const size = Math.random() * (5000 - 1) + 1;
console.log("Size: " + size);

const writer = new Writer(
  size < 1000 ? new SSDWriterWraper() : new HDDWriter()
);
writer.write("filepath");
