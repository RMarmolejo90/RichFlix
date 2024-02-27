"use client"

import React, { useState } from 'react'
import query from './query';
import MovieRow from '../components/movieRow';

export default function search() {

  const [searchWords,setSearchWords] = useState('');
  const [searchType, setSearchType] = useState('keyword');
  const [searchResults, setSearchResults] = useState<QueryData | null>(null);

  const submitSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = await query(searchWords, searchType);
    setSearchResults(results);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWords(e.target.value);
  }

  const handleSearchType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value)
  }

  return (
    
    // search logic

    // handleSubmit
    

    <div className='flex justify-center items-center m-60'>
        <form className='text-slate-700' onSubmit={submitSearch}>
          <label className='m-2 text-slate-300' htmlFor="type">Search By: </label>
          <select name="type" id="type" onChange={handleSearchType}>
            <option value="keyword">Keywords</option>
            <option value="person">Cast</option>
            <option value="movie">Title</option>
          </select>
          <input onChange={handleInput} className='m-4' type="text" />
          <button className='m-4 text-slate-300'  type="submit">Search</button>
          {/* suspense field / display results */}
        </form>
        {searchResults?.results && <MovieRow movies={searchResults.results} listName={searchWords} />}
    </div>
  )
}
