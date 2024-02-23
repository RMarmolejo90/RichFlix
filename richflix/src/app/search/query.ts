"use server"
import requests from "../_lib/movies/requests"

const query = async (searchWords: string, searchType: string) => {
  try {
    const results = await fetch(requests.queries.search+{searchType}+'?query='+{searchWords}+'&page=1');
    return results.json();
  } catch (error){
    throw new Error('error fetching search data');
  }
}

export default query