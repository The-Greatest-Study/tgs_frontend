import React, { Component } from 'react';
import search from './img/search.png';
import testImg from './img/test.PNG';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">위대한 스터디의 서막</h1>
        <div>
          <img src={search} /> <span style={{ position: 'relative', bottom: 2 + 'px' }}>검색</span>
        </div>
        <div style={{ marginLeft: 10 + '%', textAlign: 'left' }}>
          <p>
            <div style={{ float: 'left', width: 250 + 'px', height: 180 + 'px' }}>
              <img src={testImg} width="250px" />
              TGS는 순항 중...
            </div>
            <div
              style={{
                marginLeft: 20 + 'px',
                float: 'left',
                width: 400 + 'px',
                height: 180 + 'px',
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: 50 + 'px' }}>강사 김민호</div>
              깃에 푸쉬 좀 해주세요 제발..!!
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
