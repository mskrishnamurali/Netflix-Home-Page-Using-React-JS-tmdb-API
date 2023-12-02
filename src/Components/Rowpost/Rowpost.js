// Rowpost.js
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Rowpost.css';
import axios from 'axios';
import { baseUrl, API_KEY, imageUrl } from '../constants/constants';

function Rowpost(props) {
  const [shows, setShows] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(`${baseUrl}/${props.url}`)
      .then((response) => {
        setShows(response.data.results);
      })
      .catch((err) => {
        alert('Network error');
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    console.log('Movie ID:', id);

    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log('Video Data:', response.data);
        // Note: You might want to implement the logic to handle video data here.
        // For example, if the response contains video details, you can update the state
        // and use it to display or play the video.
      })
      .catch((error) => {
        console.error('Error fetching movie videos', error);
      });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {shows.map((show) => (
          <img
            onClick={() => handleMovie(show.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            key={show.id}
            src={`${imageUrl}${show.poster_path}`}
            alt={show.name}
          />
        ))}
      </div>
      {/* Example YouTube component; customize as needed */}
      <YouTube opts={opts} videoId={urlId} />
    </div>
  );
}

export default Rowpost;














