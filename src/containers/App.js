import React from "react";
import Popup from "../components/Popup";
import SDKContainer from "./sdk";

const App = () => {
  return (
    <div className="App">
      <Popup title="SDKs">
        <SDKContainer />
      </Popup>
    </div>
  );
};

export default App;
