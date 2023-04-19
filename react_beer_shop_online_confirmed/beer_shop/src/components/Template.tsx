import React, { useEffect } from "react";
import shopBag from '../assets/shopping-bag.png';
import logo from "../assets/beer.png";
import '../style/style.css';
import useCartStore from "../services/Zustand.service";

type Props = {};

const Template = (props: Props) => {
  const {cart, RemoveAllItems}:any = useCartStore()
  useEffect(() => {
    console.log(cart)
  }, [cart])
    return (
        <div>
            <div className='shadow bg-amber-50'>
                <div className='h-20 px-5 flex items-center justify-between'>
                    <a className="text-2xl cursor-pointer w-16 left-8" href="/">
                      <img alt="logo" src={logo}/>
                    </a>
                    <h1 className="flex items-center text-4xl font-light">Beer shop</h1>
                    <button onClick={() => {RemoveAllItems()}}>res</button>
                    <a
                        className="text-2xl cursor-pointer w-12"
                        href='/Card'
                    >
                      <img alt="logo" src={shopBag}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Template;
