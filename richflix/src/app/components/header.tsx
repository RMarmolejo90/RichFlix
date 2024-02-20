import Image from 'next/image'
import requests from '@/app/_lib/movies/requests';
import fetchRandomMovie from '@/app/_utils/fetchRandomMovie';

// this is the url to select a random movie from
const movieURL: string = requests.nowPlaying;


export default async function header() {
  
  const displayMovie = await fetchRandomMovie(movieURL);
  const backdropPath: string | null = displayMovie?.backdrop_path ?? null;
  const backdrop: string = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
  const altTag: string = displayMovie?.title??"Movie Backdrop image";
  

  return (
    <div className='w-full h-[500px] top-0 text-white overflow-hidden relative '>
      <div className='w-full h-[500px] top-0 absolute bg-gradient-to-r from-[#09090bCC] z-10'></div>
      {displayMovie && (<Image 
        src={backdrop} 
        alt={altTag} 
        quality={100}
        sizes="100vw"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '50% 10%',
        }}
        priority={true}
      />)} 
      {displayMovie && (
    <div className='absolute mt-[-200px] left-4 z-20'>
      <h1 className='text-2xl tracking-wide font-bold'>{displayMovie.title}</h1>
      <button className='border border-gray-200 tracking-wider font-semibold text-lg'>Details</button>
    </div>
  )}

  </div>
)
}
