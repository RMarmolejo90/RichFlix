import Header from '@/components/header';
import MovieList from '@/components/movieList';
import requests from '@/lib/movies/requests';


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
