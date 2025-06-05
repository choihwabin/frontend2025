import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Book_create(props) {
  const [form, setForm] = useState({
    CODE:'',
    NAME:'',
    AREA1:'',
    AREA2:'',
    AREA3:'',
    BOOK_CNT:'',
    OWNER_NUM:'',
    TEL_NUM:''
  });
  // 초기값
  const navigate = useNavigate();
  // url 주소관리

  // 텍스트 창 입력시 호출되는 함수
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  // 등록하기 버튼 클릭시 호출되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/books`,form)
    .then(()=>{
      alert('등록되었습니다.');
      navigate('/books');
    })
    .catch(err=>console.log(err));
  };


  return (
    <section className='create'>
      <h3>BOOK 상품 등록페이지</h3>
      <form onSubmit={handleSubmit}>

        <p>
          <label for='NAME'>판매자 : </label>
          <input onChange={handleChange} type='text' name='NAME' value={form.NAME} id='NAME' required/>
        </p>
        
        <p>
          <label for='AREA1'>지역1 : </label>
          <input onChange={handleChange} type='text' name='AREA1' value={form.AREA1} id='AREA1' required/>
        </p>
        
        <p>
          <label for='AREA2'>지역2 : </label>
          <input onChange={handleChange} type='text' name='AREA2' value={form.AREA2} id='AREA2' required/>
        </p>
        
        <p>
          <label for='AREA3'>지역3 : </label>
          <input onChange={handleChange} type='text' name='AREA3' value={form.AREA3} id='AREA3' required/>
        </p>
        
        <p>
          <label for='BOOK_CNT'>수량 : </label>
          <input onChange={handleChange} type='number' name='BOOK_CNT' value={form.BOOK_CNT} id='BOOK_CNT' required/>
        </p>

        <p>
          <label for='OWNER_NUM'>판매처 : </label>
          <input onChange={handleChange} type='text' name='OWNER_NUM' value={form.OWNER_NUM} id='OWNER_NUM' required/>
        </p>

        <p>
          <label for='TEL_NUM'>전화번호 : </label>
          <input onChange={handleChange} type='text' name='TEL_NUM' value={form.TEL_NUM} id='TEL_NUM' required/>
        </p>

        <p>
        <button type='submit'>작성완료</button>
        </p>
      </form>
    </section>
  );
}

export default Book_create;
