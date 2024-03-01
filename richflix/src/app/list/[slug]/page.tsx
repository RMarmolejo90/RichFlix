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
    <div className='my-20 lg:my-4 flex flex-col justify-between items-center text-center w-full min-h-full'>
      <h1 className='my-6 lg:my-2 font-bold text-4xl lg:text-5xl tracking-wider text-slate-500'>{capitalizeAndSpace(params.slug)}</h1>
      <div className='mb-6 mt-auto py-10 lg:py-2 flex flex-col group drop-shadow-[0_0_90px_rgb(220,38,38)]'>
        <MovieRow movies={movies} listName={params.slug} /> 
      </div>
    </div>
  );
}

export default List;
