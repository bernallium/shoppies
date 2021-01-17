import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList/MovieList'
import Nominate from './components/Nominate/Nominate'

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  
  useEffect(() => { 
    fetchMovies(search);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  const fetchMovies = async (search) => {
    const url = `http://www.omdbapi.com/?type=movie&s=${search}&apikey=e5181cf5`
    const response = await fetch(url); // http response
    const responseJson = await response.json();
    responseJson.Search? setMovies(responseJson.Search) : setMovies([]);
  }

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie]);
  }

  const removeFromNominations = (movie) => {
    const filteredNominations = nominations.filter(
      nomination => nomination.imdbID !== movie.imdbID
    );
    setNominations(filteredNominations);
  }

  return (
    <div className="App">
      <h1>The Shoppies 🎬</h1>
      <form className="form-group">
        <input
          type="text" 
          className="form-control"
          placeholder="Search for a movie"
          value={search}
          onChange={handleChange}
          required
        />
      </form>
      <h1>Movies</h1>
      <div>
        { movies.length && search ? `Results for "${search}"` : ""}
      </div>
      <MovieList 
        movies={movies}
        handleNominateClick={nominateMovie}
        NominateComponent={Nominate}
        nominations={nominations}
      />
      <h1>Nominations</h1>
      <MovieList
        movies={nominations}
        handleNominateClick={removeFromNominations}
        NominateComponent={Nominate}
      />
    </div>
  );
}

export default App;