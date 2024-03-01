import Header from '@/app/components/header';
import MovieList from '@/app/components/movieList';
import requests from '@/app/_lib/movies/requests';
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
import { createNewSession } from '../_utils/createNewSession';

const { userId }: {userId: string | null} = auth();
const topRated = requests.topRated;

export default function Dashboard() {

  if (!userId){ redirect('/') }
  else createNewSession(userId) 

  return (
    <>
      <div className='w-full drop-shadow-[0_0_90px_rgba(255,190,230,1)] flex flex-col justify-center items-center'>
        <div className='p-4 lg:w-2/3 flex flex-col justify-center items-center text-center'>
          <h2 className='p-10 text-5xl font-bold text-slate-600 uppercase'>Coming Soon</h2>
          <h3 className='py-4 lg:p-10 text-2xl leading-loose font-semibold'>Thanks for visiting my website. I haven't implemented the user dashboard yet, but eventually this is where you'll find the movies you've saved to your watchlist. So Stay tuned for updates. Let me know if you have any other suggestions or comments, you can email me here!</h3> 
          <a className='my-2 p-3 m-2 border rounded-sm bg-[rgba(2,6,23,0.45)] hover:border-red-600 border-gray-200 tracking-widest font-semibold text-sm hover:text-gray-50' href="mailto:richardmarmolejo@gmail.com">Email Me</a>
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
