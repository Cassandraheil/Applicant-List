import './App.css';
import React, {Component} from "react";
import applicants from "./applicants.json"
import ApplicationCard from "./components/applicantCard"
import Modal from "./components/Modal"
import { Link } from "react-router-dom"
import Form from "./components/Form"


class Applicant extends React.Component {
  // Setting the state 
  state ={
    applicants,     // applicants in the applicant json file
    show: false,    //to show the modal or not
    id: null,    // recieves id of the applicant selected to be removed
    firstName: "", // recieves name of the applicant selected to be removed
    lastName: "",
    occupation: "",
    ssn: "",
    img: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg",
    form: "none",
    home: "inline"
  };
// ------------------------this is the modal--------------------------------//
  showModal = (id, firstName) => {
    console.log("what is id here", firstName)
    this.setState({
      show: true,     // set modal to true so the modal shows
      id: id ,     // sets id of the applicant clicked
      firstName: firstName
    });
  };
  onClose = e => {
    this.setState({
      show: false   // set modal to false to hide it
    });
  };
  //------------------------- Shows the form or the homepage-------------------->
  showForm = e => {
    this.setState({
      form: "inline",
      home: "none"
    }) 
  };
  showHome = e => {
    this.setState({
      form: "none",
      home: "block"
    })
  };
  
  //----------------------------------remove applicant-------------------------//
  removeApplicant = e => {
    // filtering through the applicants id's, and showing only the id's not equal to the applicants removed.
    const applicants = this.state.applicants.filter(applicant => applicant.id !== this.state.id);
    // this will set the state to the new filtered array we have above
    this.setState({applicants})
    this.onClose()  // call the onClose function to close the modal after removing applicant
  };
  
  //-------------------------links the update button to the form page------------->
  linkUpdateForm = props => {
      this.setState({
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        occupation: props.occupation,
        ssn: props.ssn,
        img: props.img
      }, () => {
        this.showForm()
      });  
  };

  //---------------------------------Form Update and Add functions---------------------//
    updateApplicant = id => {     
        console.log("this shall be updated", id)
        console.log("this should be the state", this.state.applicants)
    }
    
    addApplicant = e => {
        e.preventDefault();
          const newApplicants = this.state.applicants.concat(
            [{id: this.state.applicants.length + 1,
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            occupation: this.state.occupation,
            ssn: this.state.ssn,
            img: this.state.img}]
          )


        this.setState({ applicants: newApplicants }, () => {
            console.log("this should be the state", this.state.applicants);
          }); 
       
          this.showHome()
    }
    
    //this function allows the input to update immediately 
    handleInputChange = e => {
        // getting the value and name of the input that caused the change
        const {name, value} = e.target;
        // setting state to the new values
        this.setState({
            [name]: value
        });
    }

  
  //This will bring all the components together and render them on the browser
  render() {
    return (
      <>
      <h1>Applicants for Roostify</h1>
      <div style={{display: this.state.home}}>
        {/* passing information to the modal, so the modal can access these functions  */}
        <Modal 
            onClose={this.onClose}
            show={this.state.show}    // sends the show state to the modal page
            removeApplicant={this.removeApplicant}  // passes the removeapplicant function
            >Are you sure you would like to remove {this.state.firstName} from the list?</Modal>

          {/* Run through all the tasks I set inside it for every applicant in the json*/}
          {this.state.applicants.map(applicant => 
            <ApplicationCard    // sending information to the application card file through props
                id={applicant.id}
                firstName={applicant.firstName}
                lastName={applicant.lastName}
                occupation={applicant.occupation}
                ssn={applicant.ssn}
                img={applicant.img}
                showModal={this.showModal}              // passes the showmodal function
                linkUpdateForm={this.linkUpdateForm}  // passes the update applicant function              
            />
          )}

          <button className="btn" onClick={this.showForm}>Add Applicant</button>   {/* this button will show you the form */}
        </div>

        <div style={{display: this.state.form}}>
          <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          occupation={this.state.occupation}
          ssn={this.state.ssn}
          img={this.state.img}
          handleInputChange={this.handleInputChange}
          addApplicant={this.addApplicant}
          showHome={this.showHome}
          />
        </div>
      </>
    )}
}

export default Applicant;
