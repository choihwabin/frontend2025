import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Fruit_create=()=> {
  //1. 상태변수를 선언하여 사용자가 입력한 값을 저장
  const [form, setForm] = useState({
    name:'',
    color:'',
    price:'',
    country:''
  });
  //url주소를 입력하여 요청을 했을 경우 실행.
  const navigate = useNavigate();

  //사용자가 입력시 실행되는 함수
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  //상품등록 버튼 클릭시 실행되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/fruits`, form)
    // 성공시
    .then(()=>{
      alert('상품이 등록되었습니다.')
      navigate('/fruits');
    })
    // 실패시
    .catch(err=>console.log(err));
  };

  return (
    <section className='create'>
      <h3>Fruits 상품등록</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label for='name'>상품명 : </label>
          <input onChange={handleChange} type='text' name='name' id='name' value={form.name} required/>
        </p>

        <p>
          <label for='color'>색 : </label>
          <input onChange={handleChange} type='text' name='color' id='color' value={form.color} required/>
        </p>

        <p>
          <label for='price'>가격 : </label>
          <input onChange={handleChange} type='number' name='price' id='price' value={form.price} required/>
        </p>

        <p>
          <label for='country'>원산지 : </label>
          <select
          id='country' name='country' value={form.country} onChange={handleChange} required
          >
            <option value=''>원산지를 선택하세요.</option>
            <option value='대한민국'>대한민국</option>
            <option value='베트남'>베트남</option>
            <option value='필리핀'>필리핀</option>
            <option value='미국'>미국</option>
            <option value='칠레'>칠레</option>
            <option value='말레이시아'>말레이시아</option>
            <option value='프랑스'>프랑스</option>
            <option value='독일'>독일</option>
          </select>
        </p>

        <p>
          <button type='submit'>작성완료</button>
        </p>
      </form>
    </section>
  );
}

export default Fruit_create;
