"use client"

import { useEffect, useState } from 'react';
import fetchMovieList from '@/app/_utils/fetchMovieList';
import requests from '@/app/_lib/movies/requests';

type RequestKeys = keyof typeof requests;


function useFetchDynamicList(listName: RequestKeys) {
  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(() => {
    const pagesToFetch = [1, 2, 3, 4, 5, 6];
    const fetchAllPages = async () => {
      try {
        const allMoviesPromises = pagesToFetch.map(pageNumber =>
          fetchMovieList(requests[listName] + `&page=${pageNumber}`) // Corrected URL construction
          );
        const moviesFromAllPages = await Promise.all(allMoviesPromises);
        setMovies(moviesFromAllPages.flat());
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchAllPages();
  }, [listName]); // Adding listName as a dependency

  return movies;
}

export default useFetchDynamicList;