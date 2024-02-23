"use server"
import requests from "../_lib/movies/requests"

const search = async (searchString: string, queryType: string) => {
  try {
    const results = await fetch(requests.queries.search+{queryType}+'?query='+{searchString}+'&page=1');
    return results.json();
  } catch (error){
    throw new Error('error fetching search data');
  }
}

export default search