import React from 'react'

type Params = {
  params: {
    movieId: string;
  }
}

export default function page({ params: { movieId } }: Params) {

  const movieData = movieId

  // fetch movie === movie.id from movieDB API

  // data === response.data
  // return data - destructure {image, cast, description}

  return (
    <div> 
        {/* image */}
        {/* cast */}
        {/* description */}
    </div>
  )
}
