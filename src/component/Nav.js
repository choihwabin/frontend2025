import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/intro'>Intro</Link></li>
        <li><Link to='/Api'>API</Link></li>
        <li><Link to='/Contact'>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;