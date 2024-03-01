"use client"


import React from 'react';
import MovieRow from '@/app/components/movieRow';
import useFetchDynamicList from '@/app/_utils/useFetchDynamicList';
import requests from '@/app/_lib/movies/requests'; // Adjust this path as needed

type RequestKeys = keyof typeof requests;

// Destructure listName directly in the function parameter
function List({ params }: { params: { slug: RequestKeys } }) {
  const movies = useFetchDynamicList(params.slug); 

 function capitalizeAndSpace(str: string) {
    const parts = str.split(/(?=[A-Z])/);
    const capitalizedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
    return capitalizedParts.join(' ');
  }

  return (
    <div className='my-20 flex flex-col justify-center items-center'>
      <h1 className=' font-bold text-5xl tracking-wider text-slate-600'>{capitalizeAndSpace(params.slug)}</h1>
      <div className='my-20 flex flex-col group'>
        <MovieRow movies={movies} listName={params.slug} /> 
      </div>
    </div>
  );
}

export default List;
