// Assuming the global Movie type is defined elsewhere
"use client"
import fetchMovieList from '@/app/_utils/fetchMovieList';
import { useEffect, useState } from 'react';
import requests from '@/app/_lib/movies/requests';

interface Props {
  listName: string
}

const fetchDynamicList = ({ listName }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const request = `${requests}.${listName}`;

  useEffect(() => {
    const pagesToFetch = [1, 2, 3, 4, 5, 6];
    const fetchAllPages = async () => {
      try {
        const allMoviesPromises = pagesToFetch.map(pageNumber =>
          fetchMovieList(`${request}&page=${pageNumber}`)
        );
        const moviesFromAllPages = await Promise.all(allMoviesPromises);
        setMovies(moviesFromAllPages.flat());
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchAllPages();
  }, []);

  return movies;
};

export default fetchDynamicList;
