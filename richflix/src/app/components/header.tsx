import Image from 'next/image'
import requests from '@/app/_lib/movies/requests';
import fetchRandomMovie from '@/app/_utils/fetchRandomMovie';
import Link from 'next/link';

// this is the url to select a random movie from
const movieURL: string = requests.nowPlaying;


export default async function header() {
  
  const displayMovie = await fetchRandomMovie(movieURL);
  const backdropPath: string | null = displayMovie?.backdrop_path ?? null;
  const backdrop: string = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
  const altTag: string = displayMovie?.title??"Movie Backdrop image";
  const description = displayMovie?.overview??"";
  

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
        <div className='absolute mt-[20vh] lg:mt-[15%] m-6 left-4 z-20 text-wrap w-[20rem] flex flex-col items-center justify-between'>
          <h1 className='text-2xl tracking-wide font-bold p-2'>{displayMovie.title}</h1>
          <p className='m-3 text-md line-clamp-4'>{description}</p>
          <Link 
            className='p-3 m-2 border rounded-sm bg-[rgba(2,6,23,0.45)] hover:border-red-600 border-gray-200 tracking-widest font-semibold text-sm hover:text-gray-50'
            href={`/movies/${displayMovie.id}`}>
            DETAILS
          </Link>
        </div>
      )}

  </div>
)
}
