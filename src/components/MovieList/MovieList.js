import React from 'react';
import Image from 'react-bootstrap/Image';

const MovieList = ({movies, handleNominateClick, NominateComponent, nominations}) => {
  return (
    <>
      {movies.map((movie, idx) => 
        <div key={movie.imdbID} 
          className={`movie ${idx===0 && nominations ? "first-movie" : ""}`}
        > 
          <Image 
            src={movie.Poster} 
            alt='movie'
            className="poster"
          />
          <div className="d-flex flex-column justify-content-between m-2">
            <h6 className="movie-title">
              {movie.Title} ({movie.Year})
            </h6>
            <NominateComponent
              movie={movie}
              handleNominateClick={handleNominateClick}
              nominations={nominations}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default MovieList;