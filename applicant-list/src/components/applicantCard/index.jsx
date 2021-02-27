import React from "react";
import "./style.css"

// Application card will display the applicants in a uniform way
function ApplicationCard(props){ // props from app.js will give me the data I need 
    return(
        // card to hold the information in
        <div className="card">
            <div className="info">
                <ul>
                    {/* passing in props(the information passed down from app.js) */}
                    <li>First Name: {props.firstName}</li>
                    <li>Last Name: {props.lastName}</li>
                    <li>Occupation: {props.occupation}</li>
                    <li>SSN: {props.ssn}</li>
                </ul>
                    
            </div>
            <button onClick={() => props.updateApplicant(props.id)}>Update</button>
            
            <button onClick={e => props.showModal(props.id)}> Remove</button>
        </div>
    )
}

export default ApplicationCard;