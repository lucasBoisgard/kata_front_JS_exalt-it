import { Beer } from "./Beer.interface";
import { CartItemType } from "./Cart.interface";

export interface State {
  cart: CartItemType[];
  add: (state: Beer) => void;
  update: (item: Beer, action: string) => void;
  remove: (beer: Beer) => void;
  RemoveAll: () => void;
}