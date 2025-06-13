import React from 'react';
import '../css/detail.css';
import {useLocation} from 'react-router-dom';


function Moviedetail() {


  const location = useLocation();
  const state = location.state;

  if(!state){
    return <div>잘못된 접근입니다. 메인페이지로 돌아가주세요.</div>;
  }

  const {poster, title, year, genres, summary, rating,background} = state;


  return (
    <section className=' detail' style={
      {backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat',
      backgroundSize:'100% auto',
      }
    }>
      
      <ul className='detail_list'>
        <li>
          <img src={poster} alt={title}/>
          <div>
            <h3>{title}</h3>
            <p><span className='font'>year</span> : {year}</p>
            <p><span className='font'>genres</span> : {genres+','}</p>
            {/* 200자가 넘어가면 ...으로 표시 */}
            <p className='summary'><span className='font'>summary</span> : {summary.slice(0, 100)}...</p>
            <p><span className='font'>rating</span> : {rating}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Moviedetail;