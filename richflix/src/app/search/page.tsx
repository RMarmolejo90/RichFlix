"use client"

import React, { useState } from 'react'
import MovieRow from '../components/movieRow';
import fetchMovieList from '../_utils/fetchMovieList';

export default function search() {

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

  const handleSearchType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value)
  }

  return (
    
    <div className='flex flex-col justify-center items-center m-60'>
      <form className='text-slate-700 my-8' onSubmit={submitSearch}>
        <label className='m-2 text-slate-300' htmlFor="type">Search By: </label>
        <select className='p-2' name="type" id="type" onChange={handleSearchType}>
          <option value="movie">Title</option>
          <option value="person">Person</option>
        </select>
        <input onChange={handleInput} className='m-4 p-2 tracking-wider' type="text" />
        <button className='m-4 text-slate-300'  type="submit">Search</button>
      </form>
      <div>
        {searchResults && <MovieRow movies={searchResults} listName={searchWords} />}
      </div>
    </div>
  )
}
