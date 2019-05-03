import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(number);
  }, [number]);
  useEffect(()=>{
    console.log("count");
    console.log(count);
  },[count])
  return (
    <>
    <p>{number}</p>
    <button
      on onClick={()=>{
        setCount(count+1);
      }}
    >

    </button>
    </>
  );
}

export default App;
