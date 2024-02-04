import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import requests from '@/lib/movies/requests';

const [movies, setMovies] = useState<Movie[]>([]);



useEffect(()=> {
  async function getMovies(fetchUrl: string): Promise<Movie[]> {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    if (!data) {throw Error(`error fetching data from ${fetchUrl}`)}
    else {
      const movies = data.results;
      return movies
    }
  }
  const movies = await getMovies(requests.popular);
  setMovies(movies);
}, [])

const header = () => {
  return (
    <div className='w-full h-96 text-white'>
      <div>
        <Image src={} alt= />
      </div>
    </div>
  )
}

export default header