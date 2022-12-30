import React from 'react';
import { FunctionComponent } from 'react';
import './EditPopUp.css';

interface EditPopUpProps{
    handleYes: React.MouseEventHandler<HTMLButtonElement>;
    handleNo: React.MouseEventHandler<HTMLButtonElement>;
}

const EditPopUp: FunctionComponent<EditPopUpProps> = (props) => {
    return (
        <div className="delete-pop-up-container">
          <div className="popup-error-message">
            Are you sure you want to delete this student?
          </div>
          <div className="button-container">
            <button className="button pop-up-button" onClick={props.handleYes}>
              Yes
            </button>
            <button className="button pop-up-button" onClick={props.handleNo}>
              No
            </button>
          </div>
        </div>
    )
};

export default EditPopUp;