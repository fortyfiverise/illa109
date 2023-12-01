import React, { useState } from "react";
// import ConfirmDialog from "./ConfirmDialog";

function DeleteButton(props) {
  const handleButtonClick = () => {
    props.confirmDelete(true);
  };

  return (
    <>
      <button onClick={() => handleButtonClick()}>Delete</button>
    </>
  );
}

export default DeleteButton;
