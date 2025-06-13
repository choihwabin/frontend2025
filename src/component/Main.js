import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';
// import Moviedetail from './Moviedetail';

class Main extends Component {
  // 1단계 - 프로그램이 시작하는 단계
  //constructor(생성자) - (어서오세요.)
  state = { //상태값 관리
    isLoading:true,
    movies:[] //영화정보가 데이터 로딩되는 곳
  };

  //axios.get을 사용하여 데이터를 불러오면 로딩 시간이 느리기 때문에 
  //비동기 방식 async, await을 사용해야 한다.
  getMovies = async()=>{
    const {
      data:{
        data:{movies},
      },
    }= await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year');
    // 영화 평점순으로 데이터를 로딩한다.
    // 출시년도 : sort_by=year
    // 평점순 : sort_by=rating
    console.log(movies); //콘솔창에 데이터를 출력확인

    // 상태값으로 전환
    this.setState({movies, isLoading:false});
  }


  
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false}); //3초 뒤에 true값을 false로 변경
    // },3000);
    this.getMovies();
  }

  
  render() {
    // 2단계 - 화면에 표시될 정보가 나오는 단계
    //render = componentDidMount (무엇을 도와드릴까요)
    const {isLoading, movies} = this.state;

    // 3단계 - 사용자가 입력, dom정보가 수정되면 업데이트 되는 단계
    //componentDidUpdate (질문시 내용 설명해줌.)

    // 4단계 - 프로그램 종료시 실행
    //componentWillUnmount (또 오세요. 감사합니다. 안녕히가세요.)
    return (
      <main>
        {/* 방법1. 문자로 표시 */}
        {/* <div>{isLoading ?'Loading...':'데이터 로딩 완료. 준비끝'}</div>  */}

        {/* 방법2. 이미지로 표시 */}
        {/* <div>{isLoading ?<img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt='로딩이미지'/>:'데이터 로딩 완료. 준비끝'}</div>  */}

        {/* 방법3. 이미지로 표시 */}
        <div className='load'>{isLoading ?<img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt='로딩이미지' className='loading_img'/>:
        (<section className='poster_sec'>
          {movies.map((movie)=>
          <Movie 
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          rating={movie.rating}
          background={movie.background_image}
          />
          )}
        </section>)}
        </div>


      </main>
    )
  }
}

export default Main;

