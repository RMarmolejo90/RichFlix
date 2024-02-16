import requests from "@/_lib/movies/requests";

async function fetchMovieList(fetchUrl: string): Promise<Movie[]> {
  try {
    const response = await fetch(fetchUrl, requests.options);
    
    if (!response.ok) {
      throw new Error(`Error fetching data from ${fetchUrl}`);
    }

    const data: QueryData = await response.json();
    const movies = data.results;
    return movies;
    
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching Movies List');
  }
  
}

export default fetchMovieList