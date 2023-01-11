import './App.css';
import React from 'react';
import Image00 from './image/head01.jpg' 
import Button from '@mui/material/Button';

console.log(Image00);

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={Image00} alt="Logo" width="100%"/>
      </header>
      <h1>Hiromu Yasukaga | 日本工学院八王子専門学校</h1>
      <div id='set'>
        <Button variant="contained" onClick={()=>{abc();}}>Hello World</Button>
      </div>
    </div>
  );
}

function abc(){
  alert("Hello")
}

export default App;