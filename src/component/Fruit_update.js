import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function Fruit_update(props) {
  const {num} = useParams();
  const [form, setForm] = useState({
    num: '',
    name: '',
    color: '',
    price: '',
    country: ''
  });
  const navigate = useNavigate();

  // 서버측에서 넘길 데이터 통신 후 성공실패 여부 출력
  useEffect(()=>{
    axios.get(`http://localhost:9070/fruits/${num}`)
    .then(res=>{
      console.log('서버 응답값 : ', res.data)
      setForm(res.data);
    })
    .catch(err=>console.log('조회 실패 : ', err))
  },[num]);

  //사용자가 텍스트 작성시 
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.put(`http://localhost:9070/fruits/fruit_update/${num}`, {
      name:form.name,
      color:form.color,
      price:form.price,
      country:form.country
    })
    .then(()=>{
      alert('상품정보가 수정되었습니다.');
      navigate('/fruits');
    })
    .catch(err=>console.log('수정실패 : ', err));
  }
  return (
    <section>
      <h3>Fruits 데이터 수정</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label for="num">번호 : </label>
          <input type="text" id="num" name="num" value={form.num} readOnly />
        </p>
        <p>
          <label for="name">이름 : </label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
        </p>
        <p>
          <label for="color">색 : </label>
          <input type="text" id="color" name="color" value={form.color} onChange={handleChange} />
        </p>
        <p>
          <label for="price">가격 : </label>
          <input type="number" id="price" name="price" value={form.price} onChange={handleChange} />
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
          <button type='submit'>수정완료</button>
        </p>
      </form>
    </section>
  );
}

export default Fruit_update;