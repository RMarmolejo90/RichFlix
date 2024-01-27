import React from 'react'
import getTopRatedMovies from '@/lib/movies/getTopRated'
// import movieCards function

export default async function TopRatedMovies() {
    
  const data = await getTopRatedMovies();  
  if (!data){
    throw new Error("Data not found");
  } 

  // 
  return (
    <div>
        
    </div>
  )
}
