import IMobileShop from "./i-mobile-shop";
import Iphone from "./iphone";
import Samsung from "./samsung";

export default class ShopKeeper {
  protected iphone: IMobileShop;
  protected samsung: IMobileShop;

  constructor() {
    this.iphone = new Iphone();
    this.samsung = new Samsung();
  }

  iphoneSale() {
    this.iphone.modelNo();
    this.iphone.price();
  }
  samsungSale() {
    this.samsung.modelNo();
    this.samsung.price();
  }
}
