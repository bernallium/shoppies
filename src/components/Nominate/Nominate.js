import React from 'react';
import Button from 'react-bootstrap/Button';

const Nominate = ({movie, handleNominateClick, nominations}) => {
  return (
    <>
      <Button
        variant={nominations? 'primary' : 'danger'}
        disabled={
          nominations && nominations.some(nomination => nomination.imdbID === movie.imdbID)
        }
        onClick={() => handleNominateClick(movie)}
      >
        {nominations? 'Add to Nominations' : 'Remove'}
      </Button>
    </>
  )
}

export default Nominate;