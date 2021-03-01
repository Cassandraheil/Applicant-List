import React, {Component} from "react";
import { Link } from "react-router-dom"
import "./style.css"

function Form(props){
    return(
        <>
        <form className="form">
            <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First Name"
            />
            <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Last Name"
            />
            <input
            value={props.occupation}
            name="occupation"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Occupation"
            />
            <input
            value={props.ssn}
            name="ssn"
            onChange={props.handleInputChange}
            type="number"
            placeholder="SSN"
            />
            <input
            value={props.img}
            name="img"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Image URL(Optional)"
            />

         <button className="btn" 
         onClick={props.addApplicant}
         >update/add</button>  
        </form>
        <button className="btn" onClick={props.showHome}>Cancel</button>
        </>
    )
}

export default Form