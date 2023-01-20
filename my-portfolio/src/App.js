import './App.css';
import React from 'react';
// import Image00 from './image/head01.jpg' 
import Button from '@mui/material/Button';
import Header from './header/Header'
import Header2 from './header/Header2'
import Port from './portfolio/Portfolio'
import Image01 from './header/ap.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="slider">
        <Header2/>
      </div>
      
      {/* <img src={Image00} alt="Logo" width="100%"/> オーストラリアで撮った画像にする */}
      <div className='profile'>
        <h1 id='name'>Hiromu Yasukaga | AIシステム科-ITスペシャリスト科</h1><br/>
        <div className='my-profile'>
          
          <h2>
            2001年生まれ21歳
          </h2>
          <p className='profile-text'>
            パソコンを触り始めて3年が経ちました。<br/>
            私は高校生2年生の春にオーストラリアへホームステイへ行かせていただきました。<br/>
            その際に学生さんがプログラミングでゲームを作成していた様子をみて
            プログラミングに興味を持ち始めました。<br/>
            好奇心旺盛な性格で、気になったことを全力でやるのが好きなので、
            海外に行ってみたり、コンテストやイベントへの参加、教室を開くなど他にも色々なことに挑戦してきました。
          </p>
        </div>
        <div  className="myphoto">
          <img src={Image01} alt="Logo" width="30%"/> {/*オーストラリアで撮った画像にする */}
        </div>
      </div>

      
      <div className='my-port'>
        <h2 className='port-title'>◆Portfolio</h2><br/>
        {/* ↓自分の作品をまとめる */}
        <Port/>
        <p><b>長期インターン</b></p>
        <p>こんなことをしました。説明あああああ</p>
      </div>

      <hr class="hr-text"></hr>
      <hr class="hr-text"></hr>

      <div className='my-hobby'>
        <h2 className='hobby-title'>◆hobby</h2><br/>
        {/* ↓自分の趣味をまとめる */}
        <p className='hobby-text'>
            パソコンを触り始めて3年が経ちました。<br/>
            私は高校生2年生の春にオーストラリアへホームステイへ行かせていただきました。<br/>
            その際に学生さんがプログラミングでゲームを作成していた様子をみて
            プログラミングに興味を持ち始めました。<br/>
            好奇心旺盛な性格で、気になったことを全力でやるのが好きなので、
            海外に行ってみたり、コンテストやイベントへの参加、教室を開くなど他にも色々なことに挑戦してきました。
        </p>
      </div>
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