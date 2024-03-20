import { type Product } from "../../interface/product";
import { useCartStore } from "../../stores/CartStore";
import { CartIcon } from "../icons/CartIcon";

export const ButtonAddToCart = ()=>{
    const addItem = useCartStore(state => state.add)

    const handleClick = ()=>{
        const element = document?.getElementById('quantityItem');
        const qty = element?.getAttribute('data-quantity')!;      
        const id = 1 
        const name = 'Fall Limited Edition Sneakers'
        const price = 125.0;
        const image = '/images/image-product-1.jpg';
        
        const quantity: number = +qty | 1;
        
        const product: Product = {
          id,
          name,
          price,
          quantity,
          image,
        };

        addItem(product)
    }

    return (
      <button
        className='w-full bg-primary hover:bg-primary/80 text-white rounded-lg flex items-center justify-center gap-x-2 px-4 py-2'
        onClick={handleClick}
      >
        <CartIcon fill='#FFFFFF' />
        Add to cart
      </button>
    );
}