"use client"

import React, { useState } from 'react'
import MovieRow from '../components/movieRow';
import fetchMovieList from '../_utils/fetchMovieList';

export default function Search() {

  const [searchWords,setSearchWords] = useState('');
  const [searchType, setSearchType] = useState('movie');
  const [searchResults, setSearchResults] = useState<Movie[]  | undefined>();
  const fetchUrl = `https://api.themoviedb.org/3/search/${searchType}?query=${searchWords}&page=1`

  const submitSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = await fetchMovieList(fetchUrl);
    const resultsWithPoster = results.filter(movie => movie.poster_path !== null);
    setSearchResults(resultsWithPoster);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWords(e.target.value);
  }

  return (
    
    <div className='flex flex-col justify-center items-center w-full'>
      <form className='text-slate-700 mt-40 mb-10 z-80 drop-shadow-[0_0_20px_rgb(220,38,38)]' onSubmit={submitSearch}>
        <input onChange={handleInput} className='m-4 px-8 p-2 tracking-wider ' type="text" />
        <button className='m-4 text-slate-300 drop-shadow-[0_0_10px_rgb(220,38,38)] font-semibold uppercase'  type="submit">Search</button>
      </form>
      <div className='flex flex-col group'>
      {searchResults && (
        <div className='mb-48 drop-shadow-[0_0_90px_rgb(220,38,38)]'>
          <div className='border-t-2 border-l-2 rounded-tl-3xl border-red-500'>
            <h2 className='p-2 pl-12 font-semibold text-xl tracking-wide'>{searchWords}</h2>
          </div>
          <MovieRow movies={searchResults} listName={searchWords} />
        </div>
      )}
      </div>
    </div>
  )
}
