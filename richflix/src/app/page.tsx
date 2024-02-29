import  MovieList  from "@/app/components/movieList";
import requests from "@/app/_lib/movies/requests";
import Header from "@/app/components/header";

 
const topRated:string = requests.topRated;
const comingSoon: string = requests.comingSoon;
const comedy: string = requests.comedy;
const drama: string = requests.drama;
const thriller: string = requests.thriller;
const romance: string = requests.romance;
const comedyTV: string = requests.comedyTV;
const nowPlaying: string = requests.nowPlaying;
const horror: string = requests.horror;
const action: string = requests.action;
const adventure: string = requests.adventure;
const documentary: string = requests.documentary;


export default function Home() {
    // if user is authorized - redirect to "/[user]"
    // this will need to be done with middleware - NextResponse.redirect() or in Clerk
   
    return (
      <main className=''>
        <Header />
        <MovieList 
          fetchUrl={topRated}
          name="topRated"
          listName="Top Rated"
        />
        <MovieList 
          fetchUrl={comingSoon}
          name="comingSoon"
          listName="Coming Soon"
        />
        <MovieList 
          fetchUrl={nowPlaying}
          name="nowPlaying"
          listName="Now Playing"
        />
        <MovieList 
          fetchUrl={comedy}
          name="comedy"
          listName="Comedy"
        />
        <MovieList 
          fetchUrl={drama}
          name="drama"
          listName="Drama"
        />
        <MovieList 
          fetchUrl={thriller}
          name="thriller"
          listName="Thriller"
        />
        <MovieList 
          fetchUrl={romance}
          name="romance"
          listName="Romance"
        />
        <MovieList 
          fetchUrl={comedyTV}
          name="comedyTV"
          listName="Comedy TV Shows"
        />
        <MovieList 
          fetchUrl={horror}
          name="horror"
          listName="Horror"
        />
        <MovieList 
          fetchUrl={action}
          name="action"
          listName="Action"
        />
        <MovieList 
          fetchUrl={adventure}
          name="adventure"
          listName="Adventure"
        />
        <MovieList 
          fetchUrl={documentary}
          name="documentary"
          listName="Documentaries"
        />
      </main>
    );
  }
    

