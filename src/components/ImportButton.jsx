import React from "react";

function ImportButton() {
  return (
    <>
      <label for="fileInput" class="import-deck" id="importLabel">
        Import
      </label>
      <input class="is-hidden" type="file" id="fileInput" accept=".csv" />
    </>
  );
}

export default ImportButton;
