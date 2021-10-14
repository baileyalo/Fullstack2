import Student from './student';
import ReactDOM, { Component } from 'react';
import College from './college';
import React from 'react';
import logo from './logo.svg';
import props from './courses';
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

class App extends Component{
  render(){
    return (
      <div>
        <Student name = "Rick Rude" number = "11111" enrolled = "2"/>
        <Student name = "Shawn Michaels" number = "22222" enrolled = "1"/>
        <Student name = "Bret Hart" number = "33333" enrolled = "3"/>
        <College name = "George Brown" location = "Casa Loma"/>
        
      </div>

    );
  }
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
