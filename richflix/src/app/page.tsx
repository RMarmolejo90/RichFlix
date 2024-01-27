import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { getTopRatedMovies } from "@/lib/movies/getTopRated"
import { MovieCard } from @components/MovieCard;

const topRatedMovies: Promise<Movies[]> = getTopRatedMovies();

export default function Home() {
  async function getMovieData(){

    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect()
   

    // fetch movie data

    // if movie data exists, respond with data
    // if no data, respond with error

  }
  return (
    <main>

      {/* Recommended Carousel or watchlist (if authorized) */}
      <MovieCard data = {getTopRatedMovies}/>
      
    </main>

    
  );
}
