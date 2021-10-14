import './App.css';
import Userlist from './StudentList';
import React, {Component} from 'react';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';




class App extends Component {

render(){
   return(  
       <div>
    <br/>
 
    <DeleteStudent/>
    <br/>
     <Userlist/>  
       
     </div>      
     )
     
    }
}



    
export default App;
