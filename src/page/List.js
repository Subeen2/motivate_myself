import React, { useState, useEffect } from 'react';
import './List.css';

function List() {
  const [sayingInput, setSayingInput] = useState("");
  const [sayingArr, setSayingArr] = useState(
    () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("saying");
        if (saved !== null) {
          return JSON.parse(saved);
        } else {
          return [];
        }
      }
    }
  );
  const [newSaying, setNewSaying] = useState("");

  //button onclick 새로운 input 값 저장, 원래 배열과 새로운 배열 합쳐서 명언 배열에 저장, input 값 리셋
  const handleSayingSubmit = (e) => {
    e.preventDefault();
    if(sayingInput !== "") {
      setNewSaying(sayingInput);
      setSayingArr([...sayingArr, newSaying]);
      setSayingInput("");
    }else {
      alert("내용을 입력해주세요.");
    }
  }

  //명언 배열 값이 변하면 localstorage에 스트링으로 바꿔 저장
  useEffect(() => {
    localStorage.setItem("saying", JSON.stringify(sayingArr));
  }, [sayingArr]);

  const inputChange = (e) => {
    setSayingInput(e.target.value);
  }

  //input 값이 바뀌면 새로운 값 셋팅
  //""값 셋팅 방지
  useEffect(() => setNewSaying(sayingInput), [sayingInput]);

  const deleteSaying = (e) => {
    //index 찾음
    const targetId = JSON.parse(e.target.id);
    const result = sayingArr.filter((item, index) => index !== targetId);
    console.log(JSON.parse(e.target.id));
    setSayingArr(result);
    //비동기
  }

  return <div className='wrapper'>
    <div className='amend-box'>
      <input id='input' onChange={inputChange} value={sayingInput} />
      <button onClick={handleSayingSubmit}>Add</button>
    </div>
    <div className='list-box'>
      {sayingArr.map((obj, index) => {
        return (
          <li key={index}>
            {obj}
            <button id={index} onClick={deleteSaying}>Delete</button>
          </li>
        )
      })
      }
    </div>
  </div>;
}

export default List;