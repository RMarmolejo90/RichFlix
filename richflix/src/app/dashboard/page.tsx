import MovieList from '@/app/components/movieList';
import requests from '@/app/_lib/movies/requests';
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
import { createNewSession } from '../_utils/createNewSession';
import { getAuth } from '@clerk/nextjs/server';

const { userId }: {userId: string | null} = auth();
const topRated = requests.topRated;

export default function Dashboard() {

  if (!userId){ redirect('/') }
  else createNewSession() 

  return (
    <>
      <div className='w-full drop-shadow-[0_0_90px_rgba(255,190,230,1)] flex flex-col justify-center items-center'>
        <div className='p-4 lg:w-2/3 flex flex-col justify-center items-center text-center'>
          <h2 className='p-10 text-5xl font-bold text-slate-600 uppercase'>Coming Soon</h2>
          <h3 className='py-4 lg:p-10 text-2xl leading-loose font-semibold'>Thanks for visiting my website. I haven&apos;t implemented the user dashboard yet, but eventually this is where you&apos;ll find the movies you&apos;ve saved to your watchlist. So Stay tuned for updates.</h3> 
          <h3 className='py-4 lg:p-10 text-4xl leading-loose font-semibold'>ENJOY!</h3>
        </div>
      </div>
      <MovieList 
          fetchUrl={topRated}
          listName="Top Rated"
          name="Top Rated"
      />
    </>
  );
}
