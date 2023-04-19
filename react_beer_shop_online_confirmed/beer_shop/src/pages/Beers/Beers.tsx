import React, { useEffect, useState } from 'react'
import { GetBeers } from '../../services/Beers.service';
import BeerCard from '../../components/BeerCard';

type Props = {}


export default function Beers({}: Props) {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    (async () => {
      setBeers(await GetBeers())
    })()
  }, [])

  return (
    <div className='grid mb-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {beers && beers.map((beer => {
        return (
      <BeerCard beers={beer}/>)
      }))}
    </div>
  )
}