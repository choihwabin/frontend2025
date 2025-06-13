import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Fruits=()=> {
  //1. 변수선언
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //2. 상품 리스트 조회 (출력)
  const loadData=()=>{
    axios.get('https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/fruits')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }
  
  //리액트 Hookd인 useEffect를 사용하여 콤포넌트가 처음 마운트 (불러올때)되었을 경우에만 loadData()함수를 실행함.
  //리액트의 생명주기 함수인 componentDidmount함수와 같다고 보면됨.
  useEffect(()=>{
    loadData();
  },[]);

  //3. 상품 리스트 삭제(delete)
  const deleteData=(num)=>{
    if(window.confirm('정말 삭제하시겠습니까?')){
      axios.delete(`https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/fruits/${num}`)
      .then(()=>{
        alert('삭제되었습니다.')
        loadData();
        
  //삭제 후 페이지 조정
  //마지막 페이지에 1개만 남아있고 삭제하면, currentPage가 totalPage보다 커질 수 있다.
  //이럴때 , 삭제 후 아래오 ㅏ같이 페이지를 조정하는 것이 UX에 좋다
        if((currentPage - 1) * itemPerPage >= data.length -1 && currentPage > 1){
          setCurrentPage(currentPage - 1);;
        }
      })
      .catch(err=>console.log(err));
    };
  };
  
  //페이지번호 상태변수 선언 
  const [currentPage, setCurrentPage] = useState(1); //초기값
  const itemPerPage= 5; //한페이지에 보여지는 개수

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

  //삭제 후 페이지 조정
  //마지막 페이지에 1개만 남아있고 삭제하면, currentPage가 totalPage보다 커질 수 있다.
  //이럴때 , 삭제 후 아래오 ㅏ같이 페이지를 조정하는 것이 UX에 좋다




  return (
    <section>
      <h3 style={{textAlign:'center', margin:'50px 0px'}}>Fruit 데이터 조회</h3>
      <div style={{height:'350px'}}>
      <table>
        <caption>Fruits Data</caption>
        <thead>
          <tr>
            <th>num(번호)</th>
            <th>name(이름)</th>
            <th>color(색)</th>
            <th>price(가격)</th>
            <th>country(원산지)</th>
            <th>편집</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map(item=>(
          <tr key={item.num}>
            <td>{item.num}</td>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{Number(item.price).toLocaleString()}</td>
            <td>{item.country}</td>
            <td>
              <button onClick={()=>navigate(`/fruits/fruit_update/${item.num}`)}>수정</button>
              <button onClick={()=>{deleteData(item.num)}}>삭제</button>
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

      {/* 상품등록버튼 */}
      <p className='add'>
        <button onClick={()=> navigate(`/fruits/fruit_create`)}>상품등록</button>
      </p>
    </section>
  );
}

export default Fruits;
