import React from "react";
import Chip from "./Components/Chip";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="bg">This is Frontend Dashbord</h1>
      <div className="chipSection">
      <h2>Chip</h2>
      <div className="chipContainer">
        <Chip type="filled" size="sm" label="Checked" closeIcon={true} />
        <Chip type="filled" size="md" label="Checked" />
        <Chip type="filled" size="md" label="Checked" />
      </div>
      </div>
    </>
  );
};

export default App;
