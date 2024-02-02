import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import requests from '@/lib/movies/requests';

const [movies, setMovies] = useState([]);

useEffect(()=> {
  fetch(requests.popular, requests.options).then(
    
})

const header = () => {
  return (
    <div className='w-full h-96 text-white'>
      <div>
        <Image src= alt= />
      </div>
    </div>
  )
}

export default header