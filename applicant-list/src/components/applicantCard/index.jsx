import React from "react";
import "./style.css"
import { Link } from "react-router-dom"


// Application card will display the applicants in a uniform way
function ApplicationCard(props) { // props from app.js will provide data to fill the cards
    return (
        // card to hold the information in
        <div className="card">

            <img src={props.img} alt="applicants image" />

            <div className="info">
                <ul>
                    {/* passing in props(the information passed down from app.js) */}
                    <li>First Name: {props.firstName}</li>
                    <li>Last Name: {props.lastName}</li>
                    <li>Occupation: {props.occupation}</li>
                    <li>SSN: {props.ssn}</li>
                </ul>



                <button className="cardBtn" onClick={() => props.linkUpdateForm(props)}>Update</button>



                <button className="cardBtn" onClick={id => props.showModal(props.id, props.firstName)}> Remove</button>
            </div>

        </div>
    )
}

export default ApplicationCard;