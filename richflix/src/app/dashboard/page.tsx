import React from 'react'
import Header from '@/components/header'
import MovieList from '@/components/movieList'
import requests from '@/lib/movies/requests'

export default function dashboard() {

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRlYmIyNDlkMGEyMGMzMjlmNDZlNDkwZTZjMTU0MiIsInN1YiI6IjY1YjBmMDVkYmU2ZDg4MDE3MTQzYjQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYZcbFV8srA7y3tWLhxbkFDSc0i9Ub2_B0UoaGwAKGE'
  }
};

fetch('https://api.themoviedb.org/3/authentication/token/new', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  return (
    <>
      <Header />
      <MovieList />
    </>
  )
}
