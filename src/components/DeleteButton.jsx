import React, { useState } from "react";

function DeleteButton(props) {
  const handleButtonClick = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      localStorage.removeItem(props.selectedKey);
      window.location.reload();
    }
  };

  return (
    <>
      <button onClick={() => handleButtonClick()}>Delete</button>
    </>
  );
}

export default DeleteButton;
