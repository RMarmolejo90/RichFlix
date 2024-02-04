import { auth } from "@clerk/nextjs";
import  MovieList  from "@/components/movieList";
import requests from "@/lib/movies/requests";

const topRated:string = requests.topRated;
const comingSoon: string = requests.comingSoon;
const comedy: string = requests.comedy;
const drama: string = requests.drama;
const thriller: string = requests.thriller;
const romance: string = requests.romance;
const comedyTV: string = requests.comedyTV;
const topRatedTV: string = requests.topRatedTV;
const nowPlaying: string = requests.nowPlaying;
const horror: string = requests.horror;
const action: string = requests.action;
const adventure: string = requests.adventure;
const documentary: string = requests.documentary;

export default function Home() {
    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect() or in Clerk
   
    return (
      <main>
        <h1>Home</h1>
        <MovieList 
          fetchUrl={topRated}
          name="Top Rated"
        />
        <MovieList 
          fetchUrl={comingSoon}
          name="Coming Soon"
        />
        <MovieList 
          fetchUrl={nowPlaying}
          name="Now Playing"
        />
        <MovieList 
          fetchUrl={comedy}
          name="Comedy"
        />
        <MovieList 
          fetchUrl={drama}
          name="Drama"
        />
        <MovieList 
          fetchUrl={thriller}
          name="Thriller"
        />
        <MovieList 
          fetchUrl={romance}
          name="Romance"
        />
        <MovieList 
          fetchUrl={comedyTV}
          name="Comedy TV Shows"
        />
        <MovieList 
          fetchUrl={topRatedTV}
          name="Top Rated TV Shows"
        />
        <MovieList 
          fetchUrl={horror}
          name="Horror"
        />
        <MovieList 
          fetchUrl={action}
          name="Action"
        />
        <MovieList 
          fetchUrl={adventure}
          name="Adventure"
        />
        <MovieList 
          fetchUrl={documentary}
          name="Documentaries"
        />
      </main>
    );
  }
    

