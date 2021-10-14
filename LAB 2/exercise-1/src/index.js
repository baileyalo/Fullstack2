
import LikeButton from './LikeButton';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeter from './Greeter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Greeter />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.Fragment>
    <Greeter/>
    <LikeButton />
  </React.Fragment>,
  document.getElementById('root')
);
ReactDOM.render(<Greeter/>, <LikeButton/> ,document.getElementById("root"));

//ReactDOM.render(<Display/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

