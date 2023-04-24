import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Beer, CartItemType, State } from "../Types/Interface";

const useCartStore = create<State>()(
    persist(
        (set) => ({
            cart: [],
            // Add beer into cart
            add: (item: Beer) =>
                set((state: State) => ({
                    cart: [...state.cart, { item: item, qty: 1 }],
                })),
            // Increase/Decrease quantity of beer inside cart
            update: (item: Beer, action: string = "inc" || "decr") =>
                set((state: State): Partial<State> => {
                    let cart = state.cart.map((value: CartItemType): CartItemType => {
                        if (value.item === item) {
                            action === "inc" ? value.qty++ : value.qty--;
                        }
                        return value;
                    });
                    return { cart: cart };
                }),
            // Remove beer(s) of cart
            remove: (item: Beer) =>
                set((state: State) => {
                    let cart = state.cart;
                    state.cart.forEach((data: CartItemType, index: number) => {
                        if (data.item.id === item.id) {
                            cart.splice(index, 1);
                        }
                    });
                    return { cart: state.cart };
                }),
            RemoveAll: () => set({ cart: [] }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => sessionStorage),
            onRehydrateStorage: () => {},
        }
    )
);

export default useCartStore;
