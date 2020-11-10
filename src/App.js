import React from 'react';
import logo from './logo.svg';
import './App.css';

import { StickyContainer, Sticky } from 'react-sticky';
import {Tabs, WhiteSpace} from 'antd-mobile';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1, paddingTop: 30}}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

// function renderTabBar(props) {
//   return (<Sticky topOffset={-50}>
//     {({ style }) => <div style={{ ...style, zIndex: 1, top: 50 }}><Tabs.DefaultTabBar {...props} /></div>}
//   </Sticky>);
// }

const tabs = [
  { title: 'First Tab', key: 't1' },
  { title: 'Second Tab', key: 't2' },
  { title: 'Third Tab', key: 't3' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <StickyContainer style={{height: 900,background: 'green'}}>
      
      {/* <div className="sticky-container">
        <div className="sticky"> */}
        
          <Tabs tabs={tabs}
            initialPage={'t2'}
            renderTabBar={renderTabBar}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of first tab
              <button style={{position:"fixed", width: 30, height: 30, background: 'red', top: 200}}>fixed</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>

        {/* </div>
      </div> */}
    </StickyContainer>

<div className="bottom"></div>

    </div>
  );
}

export default App;
