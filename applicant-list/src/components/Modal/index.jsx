import React from "react";
import "./style.css"


class Modal extends React.Component {
  render(props) {
      console.log("props", this.props)
      // this will not render the component if the state is false
        if(!this.props.show){
            return null;
        }
    return (
      <div class="modal" id="modal">
        <div class="content">{this.props.children}</div>
        <div class="actions">
        <button onClick={() => this.props.removeApplicant()}>remove</button>
        <button onClick={() => this.props.onClose()}>Cancel</button>
        </div>
      </div>
    )
    }
}


export default Modal