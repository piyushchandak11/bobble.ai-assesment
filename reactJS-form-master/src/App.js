import React from 'react';
import './App.css';
import Form from './components/Form';
import logo from './logo.jfif';


function App() {
  return (
      <div className="App">
        <div className="appHeader">
          <img className="logo" src={logo} alt="logo"/>
        </div>
        <Form />
      </div>
    );
}

export default App;
