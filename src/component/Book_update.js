import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function Book_update(props) {
  const {CODE} = useParams();
  //url 주소에 CODE값 추가하기

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
  // 기본값 설정('')
  const navigate = useNavigate();

  // 서버측에 널길 데이터를 통신 후 성공,실패여부 출력
  useEffect(()=>{
    axios.get(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/books/${CODE}`)
    .then(res=>{
      console.log('서버 응답값 : ', res.data);
      setForm(res.data);
    })
    .catch(err=>console.log('조회 실패 : ', err));
  },[CODE]);

  //데이터 입력시 상태 변수에 저장
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  // 수정하기 버튼 클릭시 실행되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.put(`http://localhost:9070/books/book_update/${CODE}`,{
      NAME:form.NAME,
      AREA1:form.AREA1,
      AREA2:form.AREA2,
      AREA3:form.AREA3,
      BOOK_CNT:form.BOOK_CNT,
      OWNER_NUM:form.OWNER_NUM,
      TEL_NUM:form.TEL_NUM
    })
    .then(()=>{
      alert('상품정보가 수정되었습니다.');
      navigate('/books'); //books페이지로 이동
    })
    .catch(err=>console.log('수정 실패 : ', err));
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <p>
          <label for='CODE'>CODE : </label>
          <input name='CODE' type='number' id='CODE' value={form.CODE} readOnly/>
        </p>

        <p>
          <label for='NAME'>판매처 : </label>
          <input type='text' onChange={handleChange} name='NAME'  id='NAME' value={form.NAME} required/>
        </p>

        <p>
          <label for='AREA1'>지역1 : </label>
          <input onChange={handleChange} name='AREA1' type='text' id='AREA1' value={form.AREA1} required/>
        </p>

        <p>
          <label for='AREA2'>지역2 : </label>
          <input onChange={handleChange} name='AREA2' type='text' id='AREA2' value={form.AREA2} required/>
        </p>

        <p>
          <label for='AREA3'>지역3 : </label>
          <input onChange={handleChange} name='AREA3' type='text' id='AREA3' value={form.AREA3} required/>
        </p>

        <p>
          <label for='BOOK_CNT'>수량 : </label>
          <input onChange={handleChange} name='BOOK_CNT' type='number' id='BOOK_CNT' value={form.BOOK_CNT} required/>
        </p>

        <p>
          <label for='OWNER_NUM'>판매자 : </label>
          <input onChange={handleChange} name='OWNER_NUM' type='text' id='OWNER_NUM' value={form.OWNER_NUM} required/>
        </p>

        <p>
          <label for='TEL_NUM'>전화번호 : </label>
          <input onChange={handleChange} name='TEL_NUM' type='text' id='TEL_NUM' value={form.TEL_NUM} required/>
        </p>

        <button type='submit'>수정하기</button>
      </form>
    </section>
  );
}

export default Book_update;
