import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  const [error,setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    fetch('https://swapi.dev/api/films/').then((response)=> { 
      if(!response.ok){
        setIsLoading(false);
        throw new Error('Something Went Wrong');
      }
      return response.json();
    }).then((data) => {
        const transformedMovies = data.results.map((movieData)=>{
          return {
            id : movieData.episode_id,
            title : movieData.title,
            openingText : movieData.opening_crawl,
            releaseDate : movieData.release_date
          }
        })
        setMovies(transformedMovies);
        setIsLoading(false);
    }).catch((error)=>{
      setError(error.message);
    });
  },[]);

  useEffect(()=>{
    console.log(1);
    fetchMoviesHandler()
  },[fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && !error && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && !error && <p>Found no movies.(Click on Fetch Movies)</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
