import { Beer } from "./Beer.interface";
import { CartItem } from "./Cart.interface";

export interface State {
  cart: CartItem[];
  add: (state: Beer) => void;
  update: (item: Beer, action: string) => void;
  remove: (beer: Beer) => void;
  RemoveAll: () => void;
}