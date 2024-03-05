import MovieList from '@/app/components/movieList';
import requests from '@/app/_lib/movies/requests';
import { auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
import { createNewSession } from '../_utils/createNewSession';
import Link from 'next/link';
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-bebas', 
});

export default function Dashboard() {
  
  const { userId }: {userId: string | null} = auth();
  const topRated = requests.topRated;

  if (!userId){ redirect('/') }
  else createNewSession() 

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='p-4 lg:w-2/3 flex flex-col justify-center items-center text-center'>
          <h2 className='p-10 text-5xl font-bold text-slate-500 uppercase'>Coming Soon</h2>
          <h3 className='py-4 lg:p-10 text-2xl leading-loose font-semibold'>Thanks for visiting my website. I haven&apos;t implemented the user dashboard yet, but eventually this is where you&apos;ll find the movies you&apos;ve saved to your watchlist. So Stay tuned for updates.</h3> 
          <Link className={`${bebas.className} text-4xl tracking-tight hover:font-semibold uppercase text-red-600 `} href={'/'}>Home</Link>
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
