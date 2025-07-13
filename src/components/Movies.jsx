import React from 'react';
import Movie from './Movie';
export default function Movies({ movies = [] }) {
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing to fetch</h4>
      )}
    </div>
  );
}
