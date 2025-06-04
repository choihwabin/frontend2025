import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register2(props) {
  const [form, setForm] = useState({
    username:'',
    password:'',
    confirmPassword:'',
    tel:'',
    email:''
  });
  const navigate = useNavigate();
  const [error, setError] = useState(''); //에러시 출력 변수
  const [success, setSuccess] = useState(''); //성공시 출력변수
  // 사용자가 입력시 호출되는 함수
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
    setError(''); //에러 초기화
    setSuccess(''); //성공 초기화
  }

  // 회원가입 버튼 클릭시 유효성 검사를 하여 모든 내용 서버로 전송
  const handleSubmit= async (e) =>{
    e.preventDefault();

    // 비밀번호와 비밀번호확인이 일치하는지
    if(form.password !== form.confirmPassword){
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    try{
      await axios.post('http://localhost:9070/register2',{
        username:form.username,
        password:form.password,
        tel:form.tel,
        email:form.email
      });
      setSuccess('회원가입이 완료되었습니다.');
      alert('회원가입 완료');
      // 완료 후 회원가입 폼 초기화
      setForm({
        username:'',
        password:'',
        confirmPassword:'',
        tel:'',
        email:''
      });
      navigate('/login2');
    }
    catch(err){
      setError('회원가입 실패 : 아이디가 이미 존재하거나 서버오류입니다.');
    }
  }

  return (
<section className='join'>
      <h2>회원가입2</h2>
      <form onSubmit={handleSubmit}>
        <p style={{textAlign:'right', fontSize:'12px'}}><span style={{color:'red'}}>*</span> 필수입력</p>
        <p>
          <label htmlFor='username'><span style={{color:'red'}}>*</span>아이디 : </label>
          <input  type='text' name='username' id='username' placeholder='ID' onChange={handleChange} value={form.username} required/>
        </p>

        <p>
          <label htmlFor='password'><span style={{color:'red'}}>*</span>비밀번호 : </label>
          <input type='password' name='password' id='password' placeholder='PASSWORD' onChange={handleChange} value={form.password} required/>
        </p>

        <p>
          <label htmlFor='confirmPassword'><span style={{color:'red'}}>*</span>비밀번호 확인 : </label>
          <input type='password' name='confirmPassword' id='confirmPassword' placeholder='PASSWORD check' onChange={handleChange} value={form.confirmPassword} required/>
        </p>

        <p>
          <label htmlFor='tel'><span style={{color:'red'}}>*</span>연락처 : </label>
          <input type='text' name='tel' id='tel' placeholder='010-0000-0000' onChange={handleChange} value={form.tel} required/>
        </p>

        
        <p>
          <label htmlFor='email'><span style={{color:'red'}}>*</span>이메일 : </label>
          <input type='email' name='email' id='email' placeholder='email@domain.com' onChange={handleChange} value={form.email} required/>
        </p>

        <p>
          <input type='submit' value='회원가입' />
          <input type='reset' value='가입취소' onClick={()=>(navigate('/login2'))}/>
        </p>
        {/* 회원가입 에러 시 빨강문자 출력 */}
        {error&&<p style={{color:'red'}}>{error}</p>}
        {/* 회원가입 성공 시 초록문자 출력 */}
        {error&&<p style={{color:'green'}}>{success}</p>}
      </form>
    </section>
  );
}

export default Register2;