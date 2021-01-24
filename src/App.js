import React, { useState, useEffect } from 'react';

import { MOVIES_API } from './api';

import Movie from './components/Movie';
// We use functional components in React with React Hooks, the most recent and new features of the technology

// Our Main component that is displaying our movies to the web page.
function App() {
  // we call the function useState in order to create a variable movies to include our movies
  //   and a setMovies function to update or set our movies once we get back a response from the API we are calling.
  const [movies, setMovies] = useState([]);

  // Calling the API Service to give us back a list of movies with description, title, images, etc.
  useEffect(() => {
    getMovies(MOVIES_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  // Rendering our movies to the page webpage, using the function map to iterate through each one of them and display them
  return (
    // <> Is an invisible element called Fragment, that is wrapping all of our html content, so they have a parent

    <>
      <header></header>
      <div className='movie-container'>
        <main>
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </main>
      </div>
    </>
  );
}

export default App;
