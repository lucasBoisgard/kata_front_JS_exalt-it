import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBeer } from "../../services/Beers.service";
import { Hop } from "../../Types/Beer.interface";
import { Malt } from "../../Types/Beer.interface";

type Props = {};

export default function Beer(props: Props) {
    const [beer, setBeer] = useState<any>({});
    const id = useParams().id || "";

    useEffect(() => {
        (async () => {
            setBeer(id && (await GetBeer(id)));
        })();
    }, [id]);
    return (
        <div className='w-full mt-2 max-w-6xl rounded bg-white shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left'>
            <div className='md:flex items-center mb-20 -mx-10'>
                <div className='w-full md:w-1/2'>
                    <div className='relative'>
                        <img
                            src={beer && beer.image_url && beer.image_url}
                            className='w-1/5 m-auto z-10'
                            alt=''
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 px-10'>
                    <div className='m-5'>
                        <h1 className='font-bold uppercase text-2xl'>
                            {beer.name}
                        </h1>
                        <h1 className='font-light text-lg mb-5'>
                            {beer.tagline}
                        </h1>
                        <p className='text-sm'>{beer.description}</p>
                    </div>
                    <p className='text-xs text-end'>
                        contributed_by {beer.contributed_by}
                    </p>
                </div>
            </div>
            <div className='md:flex  m-5'>
                {/* Ingredients box */}
                <div className='md:w-1/2 p-5'>
                    <h4 className='font-light text-center text-xl mb-5'>
                        Ingredients
                    </h4>
                    <div className='flex flex-wrap h-full list-none rounded-md shadow-2xl m-2 p-5 border border-white'>
                        <p className='p-1'>
                            {beer.ingredients && beer.ingredients.yeast}
                        </p>
                        <h5 className='p-1 w-full m-2 text-center'>Hops</h5>
                        {beer.ingredients &&
                            beer.ingredients.hops.map((hop: Hop, index: number) => (
                                <ul className='text-center w-1/2 border-b' key={index}>
                                    <li className='p-1'>{hop.name}</li>
                                    <li className='p-1'>{hop.attribute}</li>
                                    <li className='p-1'>
                                        {hop.amount.value} g
                                    </li>
                                </ul>
                            ))}
                        <h5 className='p-1 w-full m-2 text-center'>Malt</h5>
                        {beer.ingredients &&
                            beer.ingredients.malt.map((malt: Malt, index: number) => (
                                <ul className='text-center w-1/2 border-b' key={index}>
                                    <li className='p-1'>{malt.name}</li>
                                    <li className='p-1'>
                                        {malt.amount.value} g
                                    </li>
                                </ul>
                            ))}
                    </div>
                </div>
                {/* Infos Box */}
                <div className=' md:w-1/2 py-5 px-5'>
                    <h4 className='font-light text-center text-xl mb-5'>
                        Infos
                    </h4>
                    <div className='flex flex-wrap p-5 list-none  h-full rounded-md shadow-2xl m-2 border border-white'>
                        <p className='p-1'>
                            Brewers tips: <br />
                            {beer.brewers_tips}
                        </p>
                        <div className='p-1 w-full'>
                            Food pairing: <br />
                            {beer.food_pairing &&
                                beer.food_pairing.map((pair: string, index: number) => (
                                    <p key={index}>{" - " + pair}</p>
                                ))}
                            <br />
                        </div>
                        <p className='p-3'>ABV : {beer.abv}</p>
                        <p className='p-3'>
                            attenuation_level : {beer.attenuation_level}
                        </p>
                        <p className='p-3'>EBC : {beer.ebc}</p>
                        <p className='p-3'>PH : {beer.ph}</p>
                        <p className='p-3'>SRM : {beer.srm}</p>
                        <p className='p-3'>Target fg : {beer.target_fg}</p>
                        <p className='p-3'>Target og : {beer.target_og}</p>
                    </div>
                </div>
            </div>
            <button className='hover:opacity-[100] bg-gray-300 top-1/4 right-10 rounded-full p-3 fixed'>
                Add
            </button>
        </div>
    );
}
