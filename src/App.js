import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Intro from './sub/Intro';
import Api from './sub/Api';
import Contact from './sub/Contact';
import NotFound from './sub/NotFound';
import Moviedetail from './sub/Moviedetail';





function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/api' element={<Api />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/moviedetail' element={<Moviedetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
