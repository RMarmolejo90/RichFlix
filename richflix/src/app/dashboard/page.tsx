import Header from '@/app/components/header';
import MovieList from '@/app/components/movieList';
import requests from '@/app/_lib/movies/requests';


const topRated = requests.topRated;

export default function Dashboard() {
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
