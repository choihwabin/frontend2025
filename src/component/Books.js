import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Books(props) {
const [data, setData] =useState([]);
const navigate = useNavigate();

// 페이지번호 변수 선언
const [currentPage, setCurrentPage] = useState(1);
const itemPerPage= 5;

  // 페이지 계산공식
  //현재게시물 수(56개) / 보여질 개수(5) = 11페이지
  const indexOfLast = currentPage * itemPerPage;

  //현재페이지의 첫 인덱스 번호 계산 10-5 =5
  const indexOfFirst = indexOfLast - itemPerPage;

  //data배열 중 현재 페이지에 해당하는 부분만 잘라냄
  //예: data.slice(5,10) => data[5], data[6], data[7], data[8], data[9]만 화면에 표시
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  //전체 페이지수 totalPage = Math.ceil(13/5)=3 무조건 올림
  //페이지 번호는 게시물이 13개 있는 경우 1,2,3까지 나오도록한다.
  const totalPage = Math.ceil(data.length/itemPerPage);
  
  //시작번호와 끝번호를 계산해야함.
  let startPage = Math.max(1, currentPage-2);
  let lastPage = Math.min(totalPage, startPage+4);

  //페이지 번호 배열 (1~5를 동적으로 변환, 또는 totalPage까지 제한 가능)
  const pageNumbers = Array.from({length:lastPage - startPage + 1},(_,i)=>startPage+i);


//1. books 리스트출력
const loadData=()=>{
axios.get('https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/book_store2')
.then(res=>setData(res.data))
.catch(err=>console.log(err));
}
useEffect(()=>{
  loadData();
},[]);

//2. 리스트 삭제
const deleteData=(CODE)=>{
  if(window.confirm('정말 삭제하시겠습니까?')){
    axios.delete(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/book_store2/${CODE}`)
    .then(()=>{
      alert('삭제되었습니다.');
      loadData(); // 삭제후 목록 갱신

      //삭제 후 페이지 조정
      //마지막 페이지에 1개만 남아있고 삭제하면, currentPage가 totalPage보다 커질 수 있다.
      //이럴때 , 삭제 후 아래와 같이 페이지를 조정하는 것이 UX에 좋다
       if((currentPage - 1) * itemPerPage >= data.length -1 && currentPage > 1){
          setCurrentPage(currentPage - 1);;
        }
    })
    .catch(err=>console.log(err));
  }
}

  return (
    <section className='books'>
      <h3>교보문고 DB입력/출력/삭제/수정</h3>
      <p>MYSQL DB에 있는 자료를 출력하고, 자료입력, 삭제, 수정하기를 실습응용한다.</p>
      <div style={{height:'350px'}}>
        <table>
        <caption>Books Data</caption>
        <thead>
          <tr>
            <th>CODE(코드)</th>
            <th>NAME(판매처)</th>
            <th>AREA1(지역1)</th>
            <th>AREA2(지역2)</th>
            <th>AREA3(지역3)</th>
            <th>BOOK_COUNT(수량)</th>
            <th>OWNER_NUM(판매자)</th>
            <th>TEL_NUM(전화번호)</th>
            <th>ACTION(작업)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(book=>(
            <tr key={book.CODE}>
              <td>{book.CODE}</td>
              <td>{book.NAME}</td>
              <td>{book.AREA1}</td>
              <td>{book.AREA2}</td>
              <td>{book.AREA3}</td>
              <td>{Number(book.BOOK_CNT).toLocaleString()}</td>
              <td>{book.OWNER_NUM}</td>
              <td>{book.TEL_NUM}</td>
              <td>
                <button
                onClick={()=> navigate(`/books/book_update/${book.CODE}`)}
                >수정</button>
                <button 
                onClick={()=>{deleteData(book.CODE)}}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      
      <p style={{margin:'50px auto', width:'350px', textAlign:'center'}}>
        {/* 이전버튼  */}
      {currentPage > 1 &&(
        <button
        onClick={()=>{setCurrentPage(currentPage -1)}}
        >이전</button>
      )}

      {/* 페이지 번호 */}
        {pageNumbers.map(number=>(
          <button
          key={number}
          style={{
            marginLeft:'5px', 
            background: currentPage===number?'#ff4c4c':'#f0f0f0',
            color:currentPage===number?'#fff':'#000',
            padding:'5px 10px',
            border:'1px solid #ccc',
            borderRadius:'5px'}}
          onClick={()=>{setCurrentPage(number)}}
          >
          {number}
          </button>
        ))}

      {/* 다음버튼  */}
      {currentPage < totalPage &&(
        <button
        onClick={()=>{setCurrentPage(currentPage +1)}}
        >다음</button>
      )}
      </p>

      <p className='add'>
        <button onClick={()=>navigate(`/books/book_create`)}>상품등록</button>
      </p>

      
    </section>
  );
}

export default Books;
