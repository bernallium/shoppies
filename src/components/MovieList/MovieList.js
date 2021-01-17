import React from 'react';

const MovieList = ({movies, handleNominateClick, NominateComponent, nominations}) => {
  return (
    <>
      {movies.map((movie) =>
        <div
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt='movie'></img>
          <NominateComponent
            movie={movie}
            handleNominateClick={handleNominateClick}
            nominations={nominations}
          />
        </div>
      )}
    </>
  )
}

export default MovieList;