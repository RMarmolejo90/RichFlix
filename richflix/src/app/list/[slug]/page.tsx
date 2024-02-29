"use client"


import React from 'react';
import MovieRow from '@/app/components/movieRow';
import useFetchDynamicList from '@/app/_utils/useFetchDynamicList';
import requests from '@/app/_lib/movies/requests'; // Adjust this path as needed

type RequestKeys = keyof typeof requests;

// Destructure listName directly in the function parameter
function List({ params }: { params: { slug: RequestKeys } }) {
  const movies = useFetchDynamicList(params.slug); 

  return (
    <div className='my-48 flex flex-col group'>
      <MovieRow movies={movies} listName={params.slug} /> 
    </div>
  );
}

export default List;
