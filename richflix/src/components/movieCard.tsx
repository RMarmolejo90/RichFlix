import { type } from 'os';
import React, { useEffect, useState } from 'react'

type Data = {
  data: () => Promise<Movie>;
}

export default function MovieCard({data:Data}) {

  const [movieData, setMovieData] = useState([]);

  return (
    <div>

    </div>
  )
}

