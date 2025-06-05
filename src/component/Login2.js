import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login2(props) {
  const [form,setForm] = useState({
    username:'',
    password:'',
    confirmPassword:'',
    tel:'',
    email:''
  }); 
  const navigate = useNavigate();
  const [error, setError] =useState('');

  // 사용자가 입력시 실행되는 함수
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  // 로그인버튼 클릭시 실행되는 함수
  const handleSubmit=async (e)=>{
    e.preventDefault();
    // console.log(form.username, form.email, form.password, form.tel)
    try{const res = await axios.post('https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/login2', form);

      // 사용자 인증이 끝나면 토큰을 발급
      localStorage.setItem('token', res.data.token);
      alert('로그인 성공');
      navigate('/');
    }catch(err){
      setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.');
    }
  };

  return (
    <section className='login'>
      <h2>로그인2 폼</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username'>아이디 : </label>
          <input type='text' name='username' id='username' placeholder='*ID' value={form.username} onChange={handleChange} required/>
        </p>

        <p>
          <label htmlFor='password'>비밀번호 : </label>
          <input type='password' name='password' value={form.password} id='password' placeholder='*PASSWORD' onChange={handleChange} required/>
        </p>
{/* 
        <p>
          <label htmlFor='confirmPassword'>비밀번호 확인 : </label>
          <input type='password' name='confirmPassword' value={form.confirmPassword} id='confirmPassword' placeholder='PASSWORD' onChange={handleChange}/>
        </p>

        <p>
          <label htmlFor='tel'>연락처 : </label>
          <input type='text' name='tel' value={form.tel} id='tel' placeholder='010-0000-0000' onChange={handleChange}/>
        </p>

        
        <p>
          <label htmlFor='email'>이메일 : </label>
          <input type='email' name='email' id='email' value={form.email} placeholder='email@domain.com' onChange={handleChange}/>
        </p> */}

        <p className='id_save'>
          <input type="checkbox" id='id_save' />
          <label htmlFor='id_save'>아이디 저장</label>
        </p>

        <p>
        <input type='submit' value='로그인'/>
        </p>
        {error&&<p style={{color:'red'}}>{error}</p>}
        <p className="btn-group">
        <Link to='/id_search'>아이디 찾기</Link>&#10072;
        <Link to='/pw_search'>비번찾기</Link>&#10072;
        <Link to='/register2'>회원가입</Link>
        </p>

        <h3 style={{margin:'30px 0px 20px 0px', textAlign:'center'}}>간편가입</h3>
        <ul style={{textAlign:'center', display:'flex', justifyContent:'space-around'}}>
          <li><img src={`${process.env.PUBLIC_URL}/images/kakao.png`}/></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/naver.png`}/></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/google.png`}/></li>
        </ul>
      </form>
      <hr />

      <div> 
      <h3>프론트엔드(React)에서 처리</h3>
      <ul>
        <li>로그인폼을 작성하고 '회원가입' 클릭하면 회원가입 페이지로 이동하기</li>
        <li>회원가입시 '아이디(username)','비밀번호(password)', '전화번호(tel)', '이메일(email)'를 입력하여 회원가입을 할 수 있도록 한다.</li>
        <li>사용자가 '아이디', '패스워드'를 입력하여 '로그인' 버튼 클릭시 서버측에 '인증요청'</li>
      </ul>
      <br />
      <h3>백엔드(Node.js + Express)에서 처리</h3>
      <ul>
        <li>사용자가 입력한 id, pw를 post방식으로 받아 db조회하여 일치하는지 여부에 따라 로그인 처리를 하고 JWT토큰을 발급함.
        </li>
        <li>데이터베이스(MYSQL) : 사용자 정보를 저장</li>
        <li>보안 : 비밀번호는 bcrypt로 암호화, JWT로 인증을 유지함.</li>
      </ul>
      <br />
      <h3>용어 설명</h3>
      <ul>
        <li>express : 웹 서버 프레임워크</li>
        <li>cors : 크로스 도메인 요청을 허용</li>
        <li>mysql : MYSQL 데이터 베이스 연결을 위한 라이브러리(npm i mysql)</li>
        <li>bcrypt: 사용자가 입력한 패스워드를 해시처리(npm i bcrypt)</li>
        <li>jsonwebtoken : JWT 토큰 생성 및 검증(npm i jsonwebtoken)</li>
        <li>app : Express 앱 객체 생성</li>
        <li>port : 서버가 열릴 포트번호 ( 통화하기 위해 상대방 전화번호와 같다.)</li>
        <li>SECRET_KEY : JWT 서명시 사용할 비밀 키</li>
        <li>express.json() : JSON 형식의 요청 본문을 파싱</li>
        <li>cors() : CORS 정책 허용</li>
        <li>bcrypt.compare : 입력한 비밀번호와 DB비밀번호 비교할 때</li>
      </ul>
      <br />
      <h3>DB에 입력할 SQL쿼리문</h3>
      <p>
        CREATE TABLE users2(<br />
          id INT PRIMARY KEY AUTO_INCREMENT,<br />
          username VARCHAR(100) UNIQUE NOT NULL,<br />
          password VARCHAR(255) NOT NULL,<br />
          email VARCHAR(255) NOT NULL,<br />
          tel VARCHAR(255) NOT NULL,<br />
          datetitme timestamp NOT NULL DEFAULT current_titmestamp(),);
        
      </p>
      </div>
    </section>
  );
}

export default Login2;
