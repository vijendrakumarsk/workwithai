import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="topSideDar">
          <span className="brand">Ask Me AI</span>
        </div>
        <div className="bottomSideBar"></div>
      </div>
      <div className="main"></div>
    </div>
  )
}

export default App;
