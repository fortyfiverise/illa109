import React from "react";

function ExportButton(props) {
  const exportToCSV = () => {
    const storageData = localStorage.getItem(props.selectedKey);
    const parsedData = JSON.parse(storageData);

    if (!parsedData) {
      console.error("Invalid data in local storage.");
    } else {
      const cards = parsedData.cards;
      let csvContent = "";

      cards.forEach((card) => {
        csvContent += `${card.front};${card.back}\n`;
      });

      const blob = new Blob([csvContent], { type: "text/csv" });
      const fileName = `${props.selectedKey}.csv`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return <button onClick={() => exportToCSV()}>Export</button>;
}

export default ExportButton;
