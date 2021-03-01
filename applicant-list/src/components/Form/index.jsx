import React, { Component } from "react";
import "./style.css"

function Form(props) {
    return (
        <>
            <form className="form">
                <input
                    value={props.firstName} //the default value is grabbed
                    name="firstName"        //name of this input
                    onChange={props.handleInputChange}  //allows input to update immediately,so input box can be typed in
                    type="text"             //type of thing that will be typed in 
                    placeholder="First Name"    //what appears as a placeholder in the input
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

                {/* will call the sortUpdate function */}
                <button className="btn" onClick={props.sortForUpdate}>update/add</button>   
            </form>
            {/* calls the showHome function Note: outside of the form because it automatically was called to refresh page */}
            <button className="btn" onClick={props.showHome}>Cancel</button>
        </>
    )
}

export default Form