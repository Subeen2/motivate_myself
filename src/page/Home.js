import React, { useState, useEffect } from 'react';
import './Home.css';
import List from './List';

function Home() {
  const sayingArr = JSON.parse(localStorage.getItem("saying"));
  const [showSaying, setShowSaying] = useState(sayingArr[Math.floor(Math.random() * sayingArr.length)]);
  const [showList, setShowList] = useState(false);

  const random = () => {
    setShowSaying(sayingArr[Math.floor(Math.random() * sayingArr.length)]);
  }

  useEffect(() => {
    const func = setInterval(() => {
      random();
    }, 5000);
    return () => clearInterval(func);
  }, []);

  const goHome = () => {
    setShowList(false);
  }

  return <div className='home'>
    <button className='home-button' onClick={goHome}>Go home</button>
    {showList ?
      <List />
      :
      <div className='wise-saying-wrapper'>
        <div className='wise-saying-box'>
          {showSaying}
        </div>
        <button id='amend-button' onClick={() => setShowList(true)}>Amend List</button>
      </div>
    }
  </div>;
}

export default Home;