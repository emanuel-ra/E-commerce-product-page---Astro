import { CartIcon } from "../icons/CartIcon";
export const ButtonAddToCart = ()=>{

    const handleClick = ()=>{
        const element = document?.getElementById('quantityItem');
        const quantity = element?.getAttribute('data-quantity');        
    }

    return (
      <button
        className='w-full bg-primary hover:bg-primary/80 text-white rounded-lg flex items-center justify-center gap-x-2'
        onClick={handleClick}
      >
        <CartIcon fill='#FFFFFF' />
        Add to cart
      </button>
    );
}