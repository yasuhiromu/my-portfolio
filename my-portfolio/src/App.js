import './App.css';
import MediaQuery from "react-responsive";
import React from 'react';
// import Image00 from './image/head01.jpg' 
import Button from '@mui/material/Button';
import Header from './header/Header'
import Header2 from './header/Header-slider'
// import Port from './portfolio/Portfolio'
// import Portunder1000 from './portfolio/Portfolio-under1000'
import Image01 from './image/profile.jpg'
import Image02 from './image/rabbit.jpg'
import Image03 from './image/rabbit1.jpg'
import Image04 from './image/Australia.jpg'
import Image05 from './image/my-logo.png'
import Image06 from './image/original logo.png'
import Image07 from './image/bestbook.jpg'
import Image09 from './image/book-no2.jpg'
import Image10 from './image/book-no3.jpg'
// import Image05 from './image/my-logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
      <MediaQuery query="(max-width: 1300px)">
      <div className="slider">
          <Header2/>
        </div>
        {/* <img src={Image00} alt="Logo" width="100%"/> オーストラリアで撮った画像にする */}
          <h1 id='name'>Hiromu Yasukaga | AIシステム科-ITスペシャリスト科</h1><br/>
          <div className='my-profile' style={{width: '55%'}}>
            
            <h2>
              2001年生まれ21歳
            </h2>
            
            <p className='profile-text'>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
              好奇心旺盛な性格で、気になったことを全力でやるのが好きなので、
              海外に行ってみたり、コンテストやイベントへの参加、教室を開くなど他にも色々なことに挑戦してきました。
            </p>
            <img id='au' src={Image04} alt="Logo" width="100%"/>
            
          </div>
          <div  className="myphoto">
            <img src={Image01} alt="Logo" width="30%"/> {/*オーストラリアで撮った画像にする */}
          </div>
          
        <br/>
        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

        <h2 className='port-title'>◆Portfolio</h2><br/>
        <div className='my-port'>
          <div id='set'>
            <Button variant="contained" style={{ width: "40%", height: "50px",color: "#ffa500"}} onClick={()=>{abc();}}><b>Portfolioの閲覧はこちらをクリックしてください</b></Button>
          </div>
        </div>  
        <br/>
        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

          <h2 className='interne-title'><b>◆長期インターン</b></h2>
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
            <p className='interne-text'>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
            </p>
          </div>
          <br/>

        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

        <div className='my-hobby'>
          <h2 className='hobby-title'>◆hobby</h2><br/>
          <div className='hobbylist'>
              <ul className='cc'>
                  <ul>
                    <li>筋トレ</li>
                    <li>絵</li>
                    <li>読書</li>
                    <li>格闘技</li>
                    <li>ゲーム</li>
                    <li>1人旅行</li>
                  </ul>
              </ul>
          </div>
          <div className='hobby-img'>
              {/* ↓自分の趣味をまとめる */}
              <img id='rabbit01' src={Image02} alt="cherry" width="20%"/> 
              <img id='rabbit02' src={Image03} alt="cherry" width="20%"/> 
              <img id='orilogo' src={Image05} alt="Logo" width="15%"/> 
              <img id='orilogo1' src={Image06} alt="Logo" width="15%"/> <br/>
              <div className='book-img'>
                <img id='book' src={Image07} alt="best book" width="15%"/>
                <img id='book2' src={Image09} alt="best book" width="15%"/>
                <img id='book3' src={Image10} alt="best book" width="15%"/> 
                <br/><br/><br/>
                <h1 className='booktext'>
                  ←最近読んだ面白かった本！
                </h1>
              </div>
              
          </div>
              
        </div>
      </MediaQuery>




      <MediaQuery query="(min-width: 1300px)">
        <div className="slider">
          <Header2/>
        </div>
        {/* <img src={Image00} alt="Logo" width="100%"/> オーストラリアで撮った画像にする */}
          <h1 id='name'>Hiromu Yasukaga | AIシステム科-ITスペシャリスト科</h1><br/>
          <div className='my-profile' style={{width: '55%'}}>
            
            <h2>
              2001年生まれ21歳
            </h2>
            
            <p className='profile-text'>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
              好奇心旺盛な性格で、気になったことを全力でやるのが好きなので、
              海外に行ってみたり、コンテストやイベントへの参加、教室を開くなど他にも色々なことに挑戦してきました。
            </p>
            <img id='au' src={Image04} alt="Logo" width="100%"/>
            
          </div>
          <div  className="myphoto">
            <img src={Image01} alt="Logo" width="31%"/> {/*オーストラリアで撮った画像にする */}
          </div>
          
        <br/>
        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

        <h2 className='port-title'>◆Portfolio</h2><br/>
        <div className='my-port'>
          <div id='set'>
            <Button variant="contained" style={{ width: "40%", height: "50px",color: "#ffa500"}} onClick={()=>{abc();}}><b>Portfolioの閲覧はこちらをクリックしてください</b></Button>
          </div>
        </div>  
        <br/>
        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

          <h2 className='interne-title'><b>◆長期インターン</b></h2>
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
            <p className='interne-text'>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
              パソコンを触り始めて3年が経ちました。<br/>
              私は高校生2年生の春にオーストラリアへ留学・ホームステイへ行かせていただきました。<br/>
              その際に留学先の学生さんがプログラミングでゲームを作成していた様子をみて
              プログラミングに興味を持ち始めました。<br/>
            </p>
          </div>
          <br/>

        <hr className="hr-text"></hr>
        <hr className="hr-text"></hr>

        <div className='my-hobby'>
          <h2 className='hobby-title'>◆hobby</h2><br/>
          <div className='hobbylist'>
              <ul className='cc'>
                  <ul>
                    <li>筋トレ</li>
                    <li>絵</li>
                    <li>読書</li>
                    <li>格闘技</li>
                    <li>ゲーム</li>
                    <li>1人旅行</li>
                  </ul>
              </ul>
          </div>
          <div className='hobby-img'>
              {/* ↓自分の趣味をまとめる */}
              <img id='rabbit01' src={Image02} alt="cherry" width="20%"/> 
              <img id='rabbit02' src={Image03} alt="cherry" width="20%"/> 
              <img id='orilogo' src={Image05} alt="Logo" width="15%"/> 
              <img id='orilogo1' src={Image06} alt="Logo" width="15%"/> <br/>
              <div className='book-img'>
                <img id='book' src={Image07} alt="best book" width="15%"/>
                <img id='book2' src={Image09} alt="best book" width="15%"/>
                <img id='book3' src={Image10} alt="best book" width="15%"/> 
                <br/><br/><br/>
                <h1 className='booktext'>
                  ←最近読んだ面白かった本！
                </h1>
              </div>
              
          </div>
              
        </div>
        
      </MediaQuery>
      
    </div>
    
    
  );
}



function abc(){
  window.location.replace("https://www.notion.so/Portfolio-cbb35691f3624b6cb6994f8692f2a7d7?pvs=4")
}

export default App;