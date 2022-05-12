import React from 'react';
import MMLogo from './mmlogo.PNG';
import './Logo.css';

function Logo() {
  return <div className='logo'>
    <img src={MMLogo}></img>
  </div>;
}

export default Logo;