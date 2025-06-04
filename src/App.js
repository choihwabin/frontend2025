import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Main from './component/Main';
import Goods from './component/Goods';
import Update from './component/Update';
import Create from './component/Create';
import Books from './component/Books';
import Book_update from './component/Book_update';
import Book_create from './component/Book_create';
import Fruits from './component/Fruits';
import Fruit_create from './component/Fruit_create';
import Fruit_update from './component/Fruit_update';
import Question from './component/Question';
import Login from './component/Login';
import Login2 from './component/Login2';
import Register from './component/Register';
import Register2 from './component/Register2';


function App() {
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    // 질문 개수 가져오기
    fetch('http://localhost:9070/question/count')
      .then(res => res.json())
      .then(data => setQuestionCount(data.count))
      .catch(() => setQuestionCount(0));
  }, []);

  return (
    <BrowserRouter>  {/* 브라우저 라우터 범위 설정 */}
      <header>
        <h1>FrontEnd Setting - React + MySQL(메인페이지)</h1>
        <nav>
          <Link to='/'>Home</Link> &nbsp;
          <Link to='/goods'>Goods</Link>&nbsp;
          <Link to='/books'>Books</Link>&nbsp;
          <Link to='/fruits'>Fruits</Link>&nbsp;
          <Link to='/question' style={{position:'relative', display:'inline-block'}}>
            Question
            {questionCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'red',
                color: '#fff',
                borderRadius: '50%',
                padding: '2px 1px',
                fontSize: '13px',
                fontWeight: 'bold',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                {questionCount}
              </span>
            )}
          </Link>&nbsp;&nbsp;
          <Link to='/login'>Login</Link>
          <Link to='/login2'>Login2</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Goods 페이지 */}
          <Route path="/goods" element={<Goods />} />
          <Route path="/goods/update/:g_code" element={<Update />} />
          <Route path="/goods/create" element={<Create />} />

          {/* Books 페이지 */}
          <Route path="/books" element={<Books />} />
          <Route path="/books/book_update/:CODE" element={<Book_update />} />
          <Route path="/books/book_create" element={<Book_create />} />

          {/* Fruits 페이지 */}
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/fruits/fruit_update/:num" element={<Fruit_update />} />
          <Route path="/fruits/fruit_create" element={<Fruit_create />} />

          {/* Question 페이지 */}
          <Route path='/question' element={<Question/>} />
          
          {/* Login 페이지 */}
          <Route path='/login' element={<Login />}/>
          {/* Login2 페이지 */}
          <Route path='/login2' element={<Login2 />}/>
          {/* 회원가입페이지 */}
          <Route path='/register' element={<Register />}/>
          {/* 회원가입2페이지 */}
          <Route path='/register2' element={<Register2 />}/>
        </Routes>
      </main>


      <footer>
        <address>Copyright &copy; 2025 BackEnd&FrontEnd allright reserved</address>
      </footer>
    </BrowserRouter>
  );
}

export default App;
