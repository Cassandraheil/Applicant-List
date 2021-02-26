import React from "react";
import "./style.css"

// Application card will display the applicants in a uniform way
function ApplicationCard(props){ // props from app.js will give me the data I need 
    return(
        <div className="card">
            <div className="info">
                <ul>
                    <li>First Name: </li>
                    <li>Last Name: </li>
                    <li>Occupation: </li>
                    <li>SSN: </li>
                </ul>
                <button>remove</button>
                
            </div>
        </div>
    )
}

export default ApplicationCard;