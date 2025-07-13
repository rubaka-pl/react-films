import React from 'react';
import NoImage from '../assets/NoImage612x612.jpg';
export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  const posterUrl = poster !== 'N/A' ? poster : NoImage;

  return (
    <>
      <div id={id} className='card movie'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            src={posterUrl}
            alt={title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = NoImage;
            }}
          />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {title}
          </span>
          <p className='card-year'>
            {year} <span className='right'>{type}</span>
          </p>
        </div>
      </div>
    </>
  );
}
