import React from 'react';
import logo from './logo.png';
import logoDesktop from './logoDesktop.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-logoWrap">
        <img src={logo} className="logo mobileShown" alt="logo" />
        <img src={logoDesktop} className="logo mobileHidden" alt="logo"/>
      </div>
        <h1 className="h1">Coming Soon!</h1>
    </div>
  );
}

export default App;
