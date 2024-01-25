import React from 'react'

export default function page({ params }) {

  const movie: string = params.movie

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
