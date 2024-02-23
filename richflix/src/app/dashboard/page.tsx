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
      <Header />
      <MovieList 
          fetchUrl={topRated}
          listName="Top Rated"
      />
    </>
  );
}
