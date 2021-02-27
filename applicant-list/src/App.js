import './App.css';
import React, {Component} from "react";
import applicants from "./applicants.json"
import ApplicationCard from "./components/applicantCard"
import Modal from "./components/Modal"
import { Link } from "react-router-dom"


class Applicant extends React.Component {
  // Setting the state 
  state ={
    applicants,     // applicants in the applicant json file
    show: false,    //to show the modal or not
    id: null    // recieves id of the applicant selected to be
  };

  showModal = id => {
    this.setState({
      show: true,     // set modal to true so the modal shows
      id: id      // sets id of the applicant clicked
    });
  };
  onClose = e => {
    this.setState({
      show: false   // set modal to false to hide it
    })
  };

  updateApplicant = id => {     
    console.log("this shall be updated", id)
  }

  addApplicant = e => {
    e.preventDefault();

      console.log("something happening",this.state.applicants.firstName)
  }

  removeApplicant = e => {
    // filtering through the applicants id's, and showing only the id's not equal to the applicants removed.
    const applicants = this.state.applicants.filter(applicant => applicant.id !== this.state.id);
    // this will set the state to the new filtered array we have above
    this.setState({applicants})
    this.onClose()  // call the onClose function to close the modal after removing applicant
  }

  
  //This will bring all the components together and render them on the browser
  render() {
    return (
      <>
      {/* passing information to the modal, so the modal can access these functions  */}
      <Modal 
          onClose={this.onClose}
          show={this.state.show}    // sends the show state to the modal page
          removeApplicant={this.removeApplicant}  // passes the removeapplicant function
          >Are you sure you would like to remove them from the applicants list?</Modal>

         {/* Run through all the tasks I set inside it for every applicant in the json*/}
        {this.state.applicants.map(applicant => 
          <ApplicationCard    // sending information to the application card file through props
              id={applicant.id}
              firstName={applicant.firstName}
              lastName={applicant.lastName}
              occupation={applicant.occupation}
              ssn={applicant.ssn}
              showModal={this.showModal}              // passes the showmodal function
              updateApplicant={this.updateApplicant}  // passes the update applicant function
          />
        )}
        <button><Link to="/form" className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}>Add Applicant</Link></button>
      </>
    )}
}

export default Applicant;
