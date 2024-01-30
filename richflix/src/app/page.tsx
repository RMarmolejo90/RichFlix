import { auth } from "@clerk/nextjs";
import  getTopRatedMovies  from "@/lib/movies/getTopRatedmovies";
import  MovieList  from "@/components/movieList";

const topRatedMovies = async () => {
    try {
      const movieData = await getTopRatedMovies();
      return movieData;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  };

export default function Home() {
    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect() or in Clerk
   
    return (
      <main>
        <h1>Home</h1>
        <MovieList movieData={topRatedMovies}/>
      </main>
    );
  }
    

