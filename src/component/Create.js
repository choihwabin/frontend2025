import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Create=()=> {
  const [form, setForm] =useState({
    g_name:'',
    g_cost:''
  });

  //url 주소관리
  const navigate = useNavigate();

  //사용자가 입력박스에 입력하면 함수 호출
  const handleChange=(e)=>{
    setForm({
      ...form, //기존 배열값에 추가하여 저장
      [e.target.name]:e.target.value
    });
  };

  //신규상품등록하기 버튼 클릭시 호출되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault(); //새로고침 방지

    axios.post(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/goods`, form)
    .then(()=>{ //서버와 통신이 성공시
      alert('상품이 등록되었습니다.');
      navigate('/goods'); //상품목록 페이지로 이동
    })
    .catch(err=>console.log(err));
  }
  

  return (
    <section className='create'>
      <h3>Goods 상품 등록</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label for='g_name'>상품명 : </label>
          <input type='text' name='g_name' value={form.g_name} id='g_name' onChange={handleChange} required/>
        </p>

        <p>
          <label for='g_cost'>가격 : </label>
          <input type='number' name='g_cost' value={form.g_cost} id='g_cost' onChange={handleChange} required/>
        </p>

        <p>
          <button type='submit'>작성완료</button>
        </p>
      </form>
    </section>
  );
}

export default Create;
