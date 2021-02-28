import React, {Component} from "react";
import { Link } from "react-router-dom"
import applicants from "../../applicants.json"
import "./style.css"


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
            <input
            type="text"
            placeholder="Image URL(Optional)"
            />
            {/* https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png */}

         <button className="btn" onClick={this.addApplicant}>update/add</button>   
         <Link to="/">Cancel</Link>
        </div>
    )}
}

export default Form