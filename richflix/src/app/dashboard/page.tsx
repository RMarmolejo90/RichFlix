import React from 'react'
import Header from '@/components/header'
import MovieList from '@/components/movieList'
import requests from '@/lib/movies/requests'

export default function dashboard() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  )
}
