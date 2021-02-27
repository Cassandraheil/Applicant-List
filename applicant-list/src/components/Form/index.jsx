import React, {Component} from "react";
import { Link } from "react-router-dom"
import applicants from "../../applicants.json"


class Form extends React.Component {
    state ={
        applicants
    }

    updateApplicant = id => {     
        console.log("this shall be updated", id)
        
      }
    
      addApplicant = e => {
        e.preventDefault();
          console.log("something happening")
      } 

    render(){
    return(
        <div className="form">
            <input
            type="text"
            placeholder="First Name"
            />
            <input
            type="text"
            placeholder="Last Name"
            />
            <input
            type="text"
            placeholder="Occupation"
            />
            <input
            type="text"
            placeholder="SSN"
            />

         <button onClick={this.addApplicant}>update/add</button>   
         <Link to="/"><button>Cancel</button></Link>
        </div>
    )}
}

export default Form