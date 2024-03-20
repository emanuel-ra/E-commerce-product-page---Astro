import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '../interface/product';
interface CartState {
  open: boolean;
  setOpen: () => void;
  cart: Product[];
  add: (product: Product) => {};
}

export const useCartStore = create<CartState>(
  persist(
    (set, get) => {
      return {
        open: false,
        cart: [],
        setOpen: () => {
          const { open } = get();
          set({ open: !open });
        },
        add: function (product: Product) {
          const items = get().cart;
          const Item = items.find((item) => item.id === product.id);
          if (Item) {
            Item.quantity += product.quantity;
          } else {
            items.push(product);
          }

          set({ cart: items });
        },
      };
    },
    { name: `FRONTED::MENTOR::SHOPPING::CART` }
  )
)
