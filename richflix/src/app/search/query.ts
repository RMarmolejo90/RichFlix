"use server"
import requests from "../_lib/movies/requests"

const query = async (searchWords: string, searchType: string) => {
  try {
    const url = `${requests.queries.search}${searchType}?query=${searchWords}&page=1`;
    console.log(url);
    const response = await fetch(url, requests.options);
    if (!response.ok) throw new Error('HTTP error, status = ' + response.status);
    return await response.json();
  } catch (error) {
    throw new Error('error fetching search data');
  }
}

export default query
