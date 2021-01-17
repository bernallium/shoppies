import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList/MovieList'
import Nominate from './components/Nominate/Nominate'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const NOMINATION_THRESHOLD = 5;
  
  useEffect(() => { 
    fetchMovies(search);
  }, [search]);

  useEffect(() => {
    checkNominationThreshold(nominations);
  }, [nominations])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  const fetchMovies = async (search) => {
    const url = `http://www.omdbapi.com/?type=movie&s=${search}&apikey=e5181cf5`
    const response = await fetch(url); // http response
    const responseJson = await response.json();
    responseJson.Search? setMovies(responseJson.Search) : setMovies([]);
  }

  const checkNominationThreshold = (nominations) => {
    if (nominations.length >= NOMINATION_THRESHOLD) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
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

  const renderAlert = () => {
    if (showAlert) {
      return (
        <Alert 
          variant="primary" 
          dismissible
          size="sm"
          className="alert"
          onClose={() => setShowAlert(false)}
        >
        Thank you! {NOMINATION_THRESHOLD} movies have successfully been nominated! 🥳
        </Alert>
      )
    }
  }

  return (
    <Container 
      className="App"
      fluid
    >
      <h1 className="app-header">The Shoppies 🏆</h1>
      <Form
        onSubmit={e => e.preventDefault()}
        className="SearchForm"
      >
        <Form.Group controlId="searchForm">
          <Form.Label>Search and nominate your favorite movies!</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by title"
            size="lg"
            value={search}
            onChange={handleChange}
          >
          </Form.Control>
          <Form.Text>
            { movies.length && search ? `${movies.length} results for "${search}"` : ""}
          </Form.Text>
        </Form.Group>
      </Form>
      {renderAlert()}
      <Row>
        <MovieList 
          movies={movies}
          handleNominateClick={nominateMovie}
          NominateComponent={Nominate}
          nominations={nominations}
          className="row"
        />
      </Row>
      <h2>Your Nominations ({nominations.length}/5)</h2>
      <ProgressBar
        now={nominations.length}
        max={5}
        variant="success"
        striped={true}
        animated={true}
      />
      <Row>
        <MovieList
          movies={nominations}
          handleNominateClick={removeFromNominations}
          NominateComponent={Nominate}
          className="row"
        />
      </Row>
    </Container>
  );
}

export default App;