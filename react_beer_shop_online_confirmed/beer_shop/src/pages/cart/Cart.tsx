import React, { useEffect, useState } from "react";
import { CartItem } from '../../components/CartItem';
import useCartStore from "../../services/Zustand.service";
import { State } from "../../Types/Zustand.interface";
import { CartItemType } from '../../Types/Cart.interface';

type Props = {};

export default function Cart({}: Props) {
  const { cart }: State | any = useCartStore();

  const [currentCart, setCurrentCart] = useState(cart || [])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tmpTotal = 0;
    currentCart.forEach((element: CartItemType) => {
      tmpTotal += element.qty;
    });
    setTotal(tmpTotal);
  }, [currentCart])

  return currentCart ? (
        <div className='h-screen bg-gray-100 pt-20'>
            <h1 className='mb-10 text-center text-2xl font-bold'>Cart</h1>
            
            {total ? (<div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
                <div className='rounded-lg md:w-2/3'>
                    {currentCart && currentCart.map((item: CartItemType, index: number) => 
                      <CartItem key={index} item={item.item} qty={item.qty} setQty={setTotal}/>
                    )}
                </div>

                <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
                    <div className='flex justify-between'>
                        <p className='text-lg font-bold'>Total (items) : </p>
                        <div className=''>
                            <p className='mb-1 text-md font-light'>
                                {total}
                            </p>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>
                        Check out
                    </button>
                </div>
            </div>) : <div>
                      <h1 className="text-center">Empty Cart</h1>
              </div>}
        </div>
    )  : (
      <p>Loading  ...</p>
    )
}
