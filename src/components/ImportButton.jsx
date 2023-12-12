import React from "react";

function ImportButton(props) {
  const parseAndStoreCSV = (csvData, fileName) => {
    try {
      const lines = csvData.split("\n");

      const deckName = fileName.replace(".csv", "").trim();

      if (Object.keys(localStorage).includes(deckName)) {
        alert("Deck already exists.");
      } else {
        const cards = [];

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const [front, back] = line.split(";");
            cards.push({ front, back });
          }
        }

        const deckObject = { cards };

        localStorage.setItem(deckName, JSON.stringify(deckObject));
        window.handleStorageChange();
        props.setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const csvData = e.target.result;

        parseAndStoreCSV(csvData, file.name);
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <label htmlFor="fileInput" className="import-deck">
        Import
      </label>
      <input
        className="is-hidden"
        type="file"
        accept=".csv"
        id="fileInput"
        onChange={handleFile}
      />
    </>
  );
}

export default ImportButton;
