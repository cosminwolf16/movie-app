import React from 'react';

import { IMG_PATH } from '../api';

// A  function that sets the right color class to the element dynamically based on the vote_average prop
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

// The movie component represents each movie that is displayed to the page
//  This component is receving props (properties) from its parent component (App) that is rendering it.

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    <img src={IMG_PATH + poster_path} alt='' />
    <div className='movie-info'>
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>

      <div className='movie-over'>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  </div>
);

export default Movie;
