import React from 'react';

const Nominate = ({movie, handleNominateClick, nominations}) => {
  return (
    <>
      <button
        disabled={
          nominations && nominations.some(nomination => nomination.imdbID === movie.imdbID)
        }
        onClick={() => handleNominateClick(movie)}
      >
        {nominations? 'Add to Nominations' : 'Remove from Nominations'}
      </button>
    </>
  )
}

export default Nominate;