import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {BrowseRouter, Route} from "react-router-dom";

const NewRoute = ()=> {
  return(
    <div>
      <p> New Route </p>
    </div>
  );
};
const Home =()=>{
  return(
    <div>
      <p> Home</p>
    </div>
  );
};
class App extends Component{
  
  render (){
    return(
<div>
  <BrowseRouter>
  <Route>
  </Route>
  </BrowseRouter>
</div>
    )
  }
}


export default App;
