import IMobileShop from "./i-mobile-shop";

export default class Samsung implements IMobileShop {
  modelNo(): void {
    console.log("Samsung");
  }
  price(): void {
    console.log("500 EUR");
  }
}
