import { auth } from "@clerk/nextjs";
import  MovieList  from "@/components/movieList";
import requests from "@/lib/movies/requests";

const topRated:string = requests.topRated;

export default function Home() {
    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect() or in Clerk
   
    return (
      <main>
        <h1>Home</h1>
        <MovieList fetchUrl={topRated}/>
      </main>
    );
  }
    

