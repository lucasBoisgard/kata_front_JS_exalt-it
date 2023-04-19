import React, { useEffect, useState } from 'react'
import useCartStore from '../services/Zustand.service';

type Props = {
  beers: any
}

// generate random price between 
const rngPrice = () => Math.round((Math.random()*15*100))/100;



const BeerCard = (props: Props) => {

  const [price, setPrice] = useState(0);
  const {addItem}:any = useCartStore()

   const handlerAdd = async (item: string) => {
    console.log(item)
    await addItem(item);
  }

  useEffect(() => {
    setPrice(rngPrice())
  }, [props])

  return (
    <div className='w-[300px] m-auto my-4 px-2'>
    <div className='bg-amber-600 bg-opacity-50 shadow-xl rounded overflow-hidden border border-opacity-50 border-amber-600'>
        <div className='flex h-[250px]'>
          <img className='h-full px-4 py-2 bg-white' src={props.beers.image_url} alt="" />
          <div className='m-2'>
            <p className='font-bold text-gray-800 text-[14px]'>{props.beers.name}</p>
            <p className='text-[#7C7C80] font-[15px] mt-6'>{props.beers.boil_volume.value/100} {props.beers.boil_volume.unit}</p>
            <p className='text-[17px] font-bold'>{price + " €"}</p>
          </div>
        </div>
        <div className='over flex font-light h-full'>
              <button className='hover:opacity-[100] opacity-80 bg-white  w-1/2' onClick={() => handlerAdd(props.beers)}>AJOUTER AU PANIER</button>
              <button className='hover:opacity-[100] opacity-80 bg-white  w-1/2 '>DETAILS</button>
            </div>
    </div>
</div>
  )
}


export default BeerCard;