import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import  getTopRatedMovies  from "@/lib/movies/getTopRatedmovies";
import  MovieList  from "@/components/movieList";

export default function Home() {

    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect()
   

    // fetch movie data

    // if movie data exists, respond with data
    // if no data, respond with error
    console.log(getTopRatedMovies());
    return (
      <main>

      {/* Recommended Carousel or watchlist (if authorized) */}
      <MovieList data={getTopRatedMovies}/>
      
    </main>
    );
  }
    

