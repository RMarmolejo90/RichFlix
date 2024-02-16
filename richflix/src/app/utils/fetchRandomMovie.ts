"use server"
import requests from "@/lib/movies/requests";

export default async function fetchRandomMovie(fetchUrl: string): Promise<Movie> {
  try {
    // fetch an array of movies from the fetch url param
    const response = await fetch(fetchUrl, requests.options);
    const data: QueryData = await response.json();
    const movies = data.results;
    if (movies.length === 0) throw new Error("No movies found");

    // return a random movie from the array
    const randomMovie: Movie = movies[Math.floor(Math.random() * movies.length)];
    return randomMovie;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
}