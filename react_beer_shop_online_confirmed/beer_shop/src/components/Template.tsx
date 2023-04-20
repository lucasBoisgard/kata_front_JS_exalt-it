import React, { useEffect } from "react";
import shopBag from "../assets/shopping-bag.png";
import logo from "../assets/beer.png";
import "../style/style.css";
import useCartStore from "../services/Zustand.service";

type Props = {};

const Template = (props: Props) => {
    const { cart, RemoveAll }: any = useCartStore();
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    return (
        <div>
            <div className='shadow bg-amber-50'>
                <div className='h-20 px-5 flex items-center justify-between'>
                    <a className='text-2xl cursor-pointer w-16 left-8' href='/'>
                        <img alt='logo' src={logo} />
                    </a>
                    <h1 className='flex items-center text-4xl font-light'>
                        Beer shop
                    </h1>
                    <button
                        onClick={() => {
                            RemoveAll();
                        }}
                    >
                        CLEAN
                    </button>
                    <a className='text-2xl cursor-pointer w-12' href='/Cart'>
                      {cart.length > 0 ?
                        <span className='relative flex m-auto left-4 top-4 h-3 w-3'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                        </span> : ''
                      }
                        <img alt='logo' src={shopBag} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Template;
