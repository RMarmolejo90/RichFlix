"use server"
import requests from "@/_lib/movies/requests";

async function fetchMovieList(fetchUrl: string): Promise<Movie[]> {
  try {
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    const movies = data.results;
    if (movies.length === 0) {throw new Error('movies not found')}
    return movies;
    
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching Movies List');
  }
  
}

export default fetchMovieList