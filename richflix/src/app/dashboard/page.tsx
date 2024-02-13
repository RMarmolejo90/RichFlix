import React from 'react'
import Header from '@/components/header'
import MovieList from '@/components/movieList'
import requests from '@/lib/movies/requests'

export default function dashboard() {


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
