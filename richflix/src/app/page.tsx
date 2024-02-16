import  MovieList  from "@/components/movieList";
import requests from "@/_lib/movies/requests";
import Header from "@/components/header";

 
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
          listName="Top Rated"
        />
        <MovieList 
          fetchUrl={comingSoon}
          listName="Coming Soon"
        />
        <MovieList 
          fetchUrl={nowPlaying}
          listName="Now Playing"
        />
        <MovieList 
          fetchUrl={comedy}
          listName="Comedy"
        />
        <MovieList 
          fetchUrl={drama}
          listName="Drama"
        />
        <MovieList 
          fetchUrl={thriller}
          listName="Thriller"
        />
        <MovieList 
          fetchUrl={romance}
          listName="Romance"
        />
        <MovieList 
          fetchUrl={comedyTV}
          listName="Comedy TV Shows"
        />
        <MovieList 
          fetchUrl={horror}
          listName="Horror"
        />
        <MovieList 
          fetchUrl={action}
          listName="Action"
        />
        <MovieList 
          fetchUrl={adventure}
          listName="Adventure"
        />
        <MovieList 
          fetchUrl={documentary}
          listName="Documentaries"
        />
      </main>
    );
  }
    

