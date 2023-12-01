import React from "react";

function ConfirmDialog(props) {
  return (
    <dialog open className="confirm">
      <div>
        Are you sure?
        <div>
          <button>Cancel</button>
          <button>Yes</button>
        </div>
      </div>
    </dialog>
  );
}

export default ConfirmDialog;
