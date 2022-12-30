import React from "react";

interface SubmitButton {
  handleSubmit: React.FormEventHandler<HTMLButtonElement>;
}

export const SubmitButton: React.FunctionComponent<SubmitButton> = (props) => {
  return (
    <>
      <button className="button submit-button" onSubmit={props.handleSubmit}>
        Submit
      </button>
    </>
  );
};
