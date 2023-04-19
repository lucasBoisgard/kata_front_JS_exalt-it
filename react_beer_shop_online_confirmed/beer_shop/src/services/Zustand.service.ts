import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (id: string) => set((state: any) => ({cart: [...state.cart, id]})),
      // RemoveItem: () => set({ bears: 0 }),
      RemoveAllItems: () => set({ cart: []})
    
    }),
    {
      name: 'cart', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: (store) => {}
    }
  )
)

export default useCartStore;