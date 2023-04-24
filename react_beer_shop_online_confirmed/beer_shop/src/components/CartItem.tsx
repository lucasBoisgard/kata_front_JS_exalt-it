import React, { useEffect, useState } from "react";
import { CartItemType } from "../Types/Cart.interface";
import useCartStore from "../services/Zustand.service";
import { State } from "../Types/Zustand.interface";
import { Beer } from "../Types/Beer.interface";

type Props = {
    key: number;
    item: Beer;
    qty: number;
    setQty: any;
};

export const CartItem = (props: Props) => {
    const { add, cart, update, remove }: State | any = useCartStore();
    const [qty, setQty] = useState(props.qty);

    const handleUpdateQty = async (action: string = "") => {
        if (
            cart.filter(
                (cartItem: CartItemType) => cartItem.item.id === props.item.id
            ).length === 0
        ) {
            await add(props.item);
            setQty(1);
        } else {
            props.setQty(
                action === "inc" ? qty + 1 : action === "decr" ? qty - 1 : 0
            );
            if (qty === 1 && action === "decr") {
                setQty(0);
                props.setQty(0);
            } else await update(props.item, action);
        }
    };

    useEffect(() => {
        cart.map((beer: CartItemType) => {
            const del = async () => {
              await remove(props.item);
            }
            if (beer.item.id === props.item.id) {
                props.setQty(beer.qty);
            }
            if (qty ===  0) {
              del();
            }
            return beer.qty;
        });
    }, [cart, props, qty, remove]);

    return qty > 0 ? (
        <div className='justify-between mb-6 h-40 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <img
                src={props.item.image_url}
                alt='beer-img-card'
                className='w-auto rounded-lg'
            />
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900'>
                        {props.item.name}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                        {props.item.tagline}
                    </p>
                </div>
                <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                    <div className='flex items-center border-gray-100'>
                        <button className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
                            onClick={() => handleUpdateQty("decr")}
                        >
                            {" "}
                            -{" "}
                        </button>
                        <input
                            className='h-8 w-8 border bg-white text-center text-xs outline-none'
                            type='number'
                            defaultValue={1}
                            value={props.qty}
                            min='1'
                        />
                        <button
                            className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                            onClick={() => handleUpdateQty("inc")}
                        >
                            {" "}
                            +{" "}
                        </button>
                        <button onClick={() => remove(props.item)}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='h-5 w-5 ml-5 cursor-pointer duration-150 hover:text-red-500'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : <></>
};
