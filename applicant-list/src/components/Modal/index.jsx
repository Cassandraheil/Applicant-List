import React from "react";
import "./style.css"


class Modal extends React.Component {
  render(props) {
      // this will not render the component if the state is false
        if(!this.props.show){
            return null;
        }
    return (
      <div className="modal" id="modal">
        <div className="content">{this.props.children}</div>
        <div className="actions">
        <button onClick={() => this.props.removeApplicant()}>remove</button>
        <button onClick={() => this.props.onClose()}>Cancel</button>
        </div>
      </div>
    )
    }
}


export default Modal