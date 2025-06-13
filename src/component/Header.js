import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';


function Header(props) {
  return (
    <header>
      <h1>
        {/* 상단로고 */}
        <Link to='/'> {/*to = href*/}
          <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`}  alt="상단로고" />
        </Link>
      </h1>
      {/* 네비게이션 */}
      <Nav />
    </header>
  );
}

export default Header;