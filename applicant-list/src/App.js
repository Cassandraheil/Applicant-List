import './App.css';
import React, {Component} from "react";
import applicants from "./applicants.json"
import ApplicationCard from "./components/applicantCard"

class Applicant extends React.Component {
  // I am setting the state to the applicants in the applicant json file
  state ={
    applicants
  };



  //This will bring everything together and render it on the screen
  render() {
    return (
      <>
        <h1>Ello world</h1>
        <ApplicationCard/>
      </>
    )}
}

export default Applicant;
