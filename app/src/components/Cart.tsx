import { type Product } from "../interface/product";
import { useCartStore } from "../stores/CartStore";
import { DeleteIcon } from "./icons/DeleteIcon";

export const Cart= ()=> {
  const cart = useCartStore(state => state.cart)
  const open = useCartStore(state => state.open)

  return (
    <div
      className={` transition ${
        open
          ? 'absolute rounded -m-2 border shadow-lg bg-white z-20 flex flex-col right-3 w-[365px]'
          : 'hidden'
      }`}
    >
      <div className='px-4 py-4 border-b'>
        <h2 className='text-xl font-bold'>Cart</h2>
      </div>
      <div className='flex flex-col gap-y-2 px-4 py-4'>
        {cart?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        {cart.length === 0 && (
          <div className="flex items-center justify-center text-secondary font-bold text-xl">
            <span>Your cart is empty</span>
          </div>
        )}
        <button className='bg-primary hover:bg-primary/80 w-full px-4 py-4 text-white rounded-lg shadow-lg mt-4'>
          Checkout
        </button>
      </div>
    </div>
  );
}

interface PropsItem {
  item:Product
}
const Item = ({item}:PropsItem) =>{
  const total = item.price*item.quantity;
  const remove = useCartStore(state => state.remove)
  return (
    <div className='flex gap-x-2 items-center justify-between'>
      <img src={item.image} alt={item.name} className='w-14 h-auto rounded' />
      <div>
        <span className='text-secondary font-semibold'>{item.name}</span>
        <div>
          <span className='text-secondary font-semibold'>
            ${item.price} <small>x</small> {item.quantity}{' '}
          </span>
          <span className='font-bold'>${total}</span>
        </div>
      </div>
      <div>
        <button onClick={()=>{
          remove(item.id);
        }}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
