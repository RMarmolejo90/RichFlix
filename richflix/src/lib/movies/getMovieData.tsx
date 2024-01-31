const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRlYmIyNDlkMGEyMGMzMjlmNDZlNDkwZTZjMTU0MiIsInN1YiI6IjY1YjBmMDVkYmU2ZDg4MDE3MTQzYjQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYZcbFV8srA7y3tWLhxbkFDSc0i9Ub2_B0UoaGwAKGE'
  }
};

interface FetchUrl {
  fetchUrl: string
}

export default async function getMovieData({fetchUrl}: FetchUrl) {
  const res = await fetch({fetchUrl}, options)
  
  if (!res.ok) {
    throw new Error("Error Fetching Movie Data");
  }
  
  const data: QueryData = await res.json();
  
  return(data);
}

