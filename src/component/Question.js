import axios from 'axios'; //백엔드와 통신을 위함
import React,{useState} from 'react'; // Hooks


const Question=()=> {
  //1. 상태변수 선언
  const [formData, setFormData] = useState({
    name:'',
    tel:'',
    email:'',
    txtbox:''
  });

  //2. 입력박스 입력시 실행되는 함수
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData(prev=>({
      ...prev, [name]:value
    }))
  }
  
  //3. 전송하기 버튼 클릭시 실행되는 함수
  //서버측에 post방식으로 데이터를 넘기기 위한 내용
  const handleSubmit= async e =>{
    e.preventDefault();
    // 데이터가 전송되면 성공, 실패(catch)
    try{ //전송 성공시 
      await axios.post(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/question`, formData);
      alert('전송이 완료되었습니다.');
      // 데이터 전송 후 변수값 초기화
      setFormData({name:'', tel:'', email:'', txtbox:''})
    }catch{ // 전송 실패시
      alert('전송이 실패하였습니다.');
    }
  }


  return(
    <form className='question' onSubmit={handleSubmit}>
      <section>
        <h3>정성을 다해 답변을 해드리겠습니다.</h3>

          <p>
            <label htmlFor="name">성함</label>
            <input onChange={handleChange} type='text' name='name' id='name' placeholder='성함을 입력해주세요.' value={formData.name} required/> 
          </p>

          <p>
            <label htmlFor='tel'>전화번호</label>
            <input onChange={handleChange} type='text' name='tel' id='tel' placeholder='전화번호를 입력해주세요.' value={formData.tel} required/>
          </p>

          <p>
            <label htmlFor='email'>이메일</label>
            <input onChange={handleChange} type='email' name='email' id='email' placeholder='이메일을 입력해주세요.' value={formData.email} required/>
          </p>

          <p>
            <label htmlFor='txtbox'>내용</label>
            <textarea onChange={handleChange} rows='10' cols='50' id='txtbox' name='txtbox' placeholder='내용을 입력해주세요.' maxLength={300} 
            value={formData.txtbox}
            required></textarea>
          </p>
          <p>
            <input type='checkbox' id='agree' required/>
            <label htmlFor='agree'>개인정보처리 방침에 동의합니다.</label>
          </p>    
        <input type='submit' onClick={handleSubmit} className='send' value='전송하기'/>
      </section>

      <div className='question_img'>
        <img src={`${process.env.PUBLIC_URL}/images/question.png`} />
      </div>
    </form>
  );
}

export default Question;
