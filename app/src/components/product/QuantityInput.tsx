import { useState } from "react";
import { MinusIcon } from "../icons/MinusIcon";
import { PlusIcon } from "../icons/PlusIcon";
export const QuantityInput = () =>{
    const [quantity,setQuantity] = useState<number>(1)
    const handleSubtract = () => {
      if(quantity===1) return
      setQuantity((prev) => prev - 1);
    };
    const handleAdd = () => setQuantity((prev) => prev + 1);
    return (
      <>
        <div className='w-full flex bg-secondary/10 h-12 rounded'>
          <button className={`bg-transparent px-4`} onClick={handleSubtract}>
            <MinusIcon />
          </button>
          <div
            className='bg-transparent text-center grow flex justify-center items-center font-semibold text-lg'
            id='quantityItem'
            data-quantity={quantity}
          >
            {quantity}
          </div>
          <button className='bg-transparent px-4' onClick={handleAdd}>
            <PlusIcon />
          </button>
        </div>
      </>
    );
}