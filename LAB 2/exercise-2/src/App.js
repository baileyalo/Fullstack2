import Student from './student';
import ReactDOM from 'react';
import College from './college';
import React from 'react';
import logo from './logo.svg';
import './App.css';


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
    </div>
  );
}


ReactDOM.render(
  <React.Fragment>
    <Student/>
    <Student />
    <Student/>
    <College/>
  </React.Fragment>,
  document.getElementById('root')
);
export default App;
