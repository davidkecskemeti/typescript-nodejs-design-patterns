import IMobileShop from "./i-mobile-shop";

export default class Iphone implements IMobileShop {
  modelNo(): void {
    console.log("Iphone 6");
  }
  price(): void {
    console.log("2000 EUR");
  }
}
