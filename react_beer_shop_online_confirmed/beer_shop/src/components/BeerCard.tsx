import React, { useEffect, useState } from "react";
import useCartStore from "../services/Zustand.service";
import { Beer } from "../Types/Beer.interface";
import { CartItem } from "../Types/Cart.interface";
import { State } from "../Types/Zustand.interface";

type Props = {
    beers: Beer;
};

const BeerCard = (props: Props) => {
    const [qty, setQty] = useState(0);
    const { add, cart, update, remove }: State | any = useCartStore();

    const handleUpdateQty = async (item: Beer, action: string = "") => {
        if (
            cart.filter((cartItem: CartItem) => cartItem.item.id === item.id)
                .length === 0
        ) {
            await add(item);
            setQty(1);
        } else {
            setQty(
                action === "inc" ? qty + 1 : action === "decr" ? qty - 1 : 0
            );
            if (qty === 1 && action === "decr") {
                await remove(item);
            } else await update(item, action);
        }
    };

    useEffect(() => {
        cart.map((beer: CartItem) => {
            if (beer.item.id === props.beers.id) {
                setQty(beer.qty);
            }
            return beer.qty;
        });
    }, [cart, props]);

    return (
        <div className='w-[300px] m-auto my-4 px-2'>
            <div className='bg-amber-600 bg-opacity-50 shadow-xl rounded overflow-hidden border border-opacity-50 border-amber-600'>
                <div className='flex h-[250px]'>
                    <img
                        className='h-full px-4 py-2 bg-white'
                        src={props.beers.image_url}
                        alt=''
                    />
                    <div className='m-2'>
                        <p className='font-bold text-gray-800 m-2 text-[14px]'>
                            {props.beers.name}
                        </p>
                        <p className='text-[10px] m-2 font-light'>
                          {props.beers.description.substring(0, 200)} 
                          {props.beers.description.length > 200 ? "..."  : ""}
                        </p>
                        <p className='text-gray-700 m-2 font-[15px]'>
                            {props.beers.boil_volume.value / 100}{" "}
                            {props.beers.boil_volume.unit}
                        </p>
                    </div>
                </div>
                <div className='flex h-[49px] font-light'>
                    {qty === 0 ? (
                        <button
                            className='hover:opacity-[100] bg-white  w-1/2'
                            onClick={() => handleUpdateQty(props.beers)}
                        >
                            AJOUTER AU PANIER
                        </button>
                    ) : (
                        <div className='flex w-1/2 ease-out duration-300'>
                            <button
                                className='hover:opacity-[100] hover:bg-green-400 w-1/3 bg-white'
                                onClick={() =>
                                    handleUpdateQty(props.beers, "inc")
                                }
                            >
                                +
                            </button>
                            <input
                                type='number'
                                className='w-1/3 text-center box-decoration-slice'
                                onChange={({ target }) => setQty(+target.value)}
                                value={qty}
                            />
                            <button
                                className='hover:opacity-[100] hover:bg-red-400 w-1/3 bg-white'
                                onClick={() =>
                                    handleUpdateQty(props.beers, "decr")
                                }
                            >
                                -
                            </button>
                        </div>
                    )}
                    <button className='  flex hover:opacity-[100] bg-white w-1/2 '>
                    <a className="hover:bg-slate-300 w-full pt-3 h-full" href={"/Beer/" + props.beers.id}>
                        DETAILS
                    </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeerCard;
