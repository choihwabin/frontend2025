import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; //데이터 타입 검사
import '../css/movie.css';



function Movie({poster, title, year, genres, summary, rating, background}) {
  return (
    <div className='movie_wrapper'>
      <ul className='movie_list'>
        <li>
          <Link to="/moviedetail" state={{ poster, title, year, genres, summary, rating, background}} >
          
          <img src={poster} alt={title}/>
            <div>
              <h3>{title}</h3>
              <p><span className='font'>year</span> : {year}</p>
              <p><span className='font'>genres</span> : {genres+','}</p>
              {/* 200자가 넘어가면 ...으로 표시 */}
              <p className='summary'><span className='font'>summary</span> : {summary.slice(0, 200)}...</p>
              <p><span className='font'>rating</span> : {rating}</p>
              
            </div>
          </Link>

        </li>
      </ul>
    </div>
  );
}
Movie.propTypes={
  id:PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;