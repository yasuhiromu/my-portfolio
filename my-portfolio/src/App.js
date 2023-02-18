import './App.css';
import MediaQuery from "react-responsive";
import React from 'react';
// import Image00 from './image/head01.jpg' 
import Button from '@mui/material/Button';
import Header from './header/Header'
import Header2 from './header/Header-slider'
import Port from './portfolio/Portfolio'
import Portunder1000 from './portfolio/Portfolio-under1000'
import Image01 from './header/ap.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
      <MediaQuery query="(max-width: 999px)">
          <div className="slider">
            <Header2/>
          </div>
          {/* <img src={Image00} alt="Logo" width="100%"/> オーストラリアで撮った画像にする */}
          <h1 id='name'>Hiromu Yasukaga <br/> AIシステム科-ITスペシャリスト科</h1><br/>
            
            <div className='my-profile'>
              <h2>2001年生まれ21歳</h2>
            
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

          <h2 className='port-title'>◆Portfolio</h2><br/>
          <div className='my-port'>
            
            {/* ↓自分の作品をまとめる */}
            <Portunder1000/>
            
          </div>  
            
            <h3 className='interne-title'><b>長期インターン</b></h3>
            <div className='interne'>
              <div className='frontend'>
                <ul className='cc'>
                  <p>フロントエンド</p>
                    <ul>
                      <li>Auth0</li>
                      <li>pay.jp</li>
                      <li>smartLP</li>
                    </ul>
                </ul>
              </div>
              <div className='backend'>
                <ul className='cc'>
                  <p>バックエンド</p>
                    <ul>
                      <li>wasabi</li>
                      <li>kintone</li>
                      <li>Zendesk</li>
                    </ul>
                </ul>
              </div>
              <div className='tool'>
                <ul className='cc'>
                  <p>情報共有ツール</p>
                    <ul>
                      <li>discode</li>
                      <li>slack</li><br/>
                    </ul>
                </ul>
              </div>
              <div className='task'>
                <ul className='cc'>
                  <p>タスク管理ツール</p>
                    <ul>
                      <li>asana</li>
                      <li>Instagant</li>
                      <li>Github</li>
                    </ul>
                </ul>
              </div>
              <div className='lang'>
                <ul className='cc'>
                  <p>プログラミング言語</p>
                    <ul>
                      <li>React</li><br/><br/>
                    </ul>
                </ul>
              </div>
            </div>
          

          <hr className="hr-text"></hr>
          <hr className="hr-text"></hr>

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
      </MediaQuery>




      <MediaQuery query="(min-width: 1000px)">
        <div className="slider">
          <Header2/>
        </div>
        {/* <img src={Image00} alt="Logo" width="100%"/> オーストラリアで撮った画像にする */}
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

        <h2 className='port-title'>◆Portfolio</h2><br/>
        <div className='my-port'>
          
          {/* ↓自分の作品をまとめる */}
          <Port/>
          
        </div>  
          
          <h3 className='interne-title'><b>長期インターン</b></h3>
          <div className='interne'>
            <div className='frontend'>
              <ul className='cc'>
                <p>フロントエンド</p>
                  <ul>
                    <li>Auth0</li>
                    <li>pay.jp</li>
                    <li>smartLP</li>
                  </ul>
              </ul>
            </div>
            <div className='backend'>
              <ul className='cc'>
                <p>バックエンド</p>
                  <ul>
                    <li>wasabi</li>
                    <li>kintone</li>
                    <li>Zendesk</li>
                  </ul>
              </ul>
            </div>
            <div className='tool'>
              <ul className='cc'>
                <p>情報共有ツール</p>
                  <ul>
                    <li>discode</li>
                    <li>slack</li><br/>
                  </ul>
              </ul>
            </div>
            <div className='task'>
              <ul className='cc'>
                <p>タスク管理ツール</p>
                  <ul>
                    <li>asana</li>
                    <li>Instagant</li>
                    <li>Github</li>
                  </ul>
              </ul>
            </div>
            <div className='lang'>
              <ul className='cc'>
                <p>プログラミング言語</p>
                  <ul>
                    <li>React</li><br/><br/>
                  </ul>
              </ul>
            </div>
          </div>
        

        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

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
      </MediaQuery>
      
    </div>
    
    
  );
}



function abc(){
  alert("Hello")
}

export default App;