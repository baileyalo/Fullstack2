import React from "react";
import axios from "axios";

class DeleteStudent extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
             .then(resp => {
                 console.log(resp);
                 this.props.deleteUserHandler();
             });
    }
  

    render (){
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
               Person ID:
                <input type = "text" name = "name" />        
            </label>            
            <button type="submit">Delete</button>
        </form>
        )
    }
}

export default DeleteStudent;
