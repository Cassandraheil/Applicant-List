import './App.css';
import React, { Component } from "react";
import applicants from "./applicants.json"
import ApplicationCard from "./components/applicantCard"
import Modal from "./components/Modal"
import { Link } from "react-router-dom"
import Form from "./components/Form"


class Applicant extends React.Component {
  // Setting the state 
  state = {
    applicants,     // applicants in the applicant json file
    show: false,    //to show the modal or not
    id: null,       // recieves id of the applicant selected to be removed/updated/added
    firstName: "",  // recieves name of the applicant selected to be removed/updated/added
    lastName: "",
    occupation: "",
    ssn: "",
    img: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg",
    form: "none",
    home: "inline"
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
      home: "inline"
    })
  };

  // ------------------------this is the Modal--------------------------------//
  showModal = (id, firstName, lastName) => {
    this.setState({
      show: true,     // set modal to true so the modal shows
      id: id,     // sets id of the applicant clicked
      firstName: firstName,  // Sets firstname of applicant clicked
      lastName: lastName
    });
  };
  onClose = e => {
    this.setState({
      show: false   // set modal to false to hide it
    });
  };
  
  //----------------------------------Remove Applicant-------------------------//
  removeApplicant = e => {
    // filtering through the applicants id's, and showing only the id's not equal to the applicants removed.
    const applicants = this.state.applicants.filter(applicant => applicant.id !== this.state.id);

    this.setState({ applicants })   // this will set the state to the new filtered array we have above

    this.onClose()  // call the onClose function to close the modal after removing applicant.
  };

  //--------------------------------------Udpate Section----------------------->
  linkUpdateForm = props => { // sets the state to applicant selected to update, then shows form
    this.setState({
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      occupation: props.occupation,
      ssn: props.ssn,
      img: props.img
    }, () => {    //callback funtion allows time for state to udate before function is called
      this.showForm()
    });
  };

  sortForUpdate = event => {  // will determine if button is an update or adding
      event.preventDefault();   // doesn't let the page reload on click
      this.state.applicants.map(applicant =>  //maps through the applicants
      {  let updatedCard= []
      if(this.state.id !== applicant.id){   //if the id doesn't exist in the applicants add a New applicant
        this.addApplicant()
        }if(this.state.id === applicant.id) { //if the id does exist, update that applicant
          const updateCard = {...applicant}   // updated card = that applicant
          updateCard.firstName = this.state.firstName;
          updateCard.lastName = this.state.lastName;
          updateCard.occupation = this.state.occupation
          updateCard.ssn = this.state.ssn
          updateCard.img = this.state.img

          // updatedCard.push(updateCard)

          this.setState({
            applicant: updateCard   // updates the applicant in state
          }, () => {
            console.log("this should be the state", applicant);
          });
        }
      })
    }

  //--------------------------New applicants and Add/update button---------------------// 
  newApplicant = e => {   // resets inputs so user can put in new applicant
    let newId = this.state.applicants.length + 1  // gives this new applicant a unique id
    this.setState({     
      id: newId,
      firstName: "",
      lastName: "",
      occupation: "",
      ssn: "",
      img: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg",
    })
    this.showForm()   // shows input Form
  };
  
  addApplicant = e => {
  // sets newApplicants = to the applicantions list plus the applicant set in state
    const newApplicants = this.state.applicants.concat(   
      [{
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        occupation: this.state.occupation,
        ssn: this.state.ssn,
        img: this.state.img
      }])
    
    this.setState({             // sets the applicants to newApplicants 
      applicants: newApplicants 
    })
    
    this.showHome()     // shows the home
  }



  //this function allows the input to update immediately 
  handleInputChange = e => {
    // getting the value and name of the input that caused the change
    const { name, value } = e.target;
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
        
        {/* allows this div to be shown or not  */}
        <div style={{ display: this.state.home }}> 
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

          <button className="btn" onClick={this.newApplicant}>Add Applicant</button>   {/* this button will show you the form */}
        </div>


        {/* allows this div to be shown or not  */}
        <div style={{ display: this.state.form }}>
          <Form
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            occupation={this.state.occupation}
            ssn={this.state.ssn}
            img={this.state.img}
            handleInputChange={this.handleInputChange}
            sortForUpdate={this.sortForUpdate}
            showHome={this.showHome}
          />
        </div>
      </>
    )
  }
}

export default Applicant;
