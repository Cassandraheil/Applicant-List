import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Form from "./components/Form"
import App from "./App"

function Routes(){
    return(
        <>
        <h1>Applicant List for Roostify</h1>
        <Router>
             <Switch>   {/*switch renders one exclusive route that matches the input */}
                <Route exact path="/" component={App}/> {/* this will render the app component */}
                <Route path="/form" component={Form}/>{/* this wil render the form component  */}
            </Switch>
         </Router>
         </>
    )
}

export default Routes

