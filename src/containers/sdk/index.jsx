import React, { useState } from "react";
import OptionsPanel from "./OptionsPanel";
import ViewPanel from "./ViewPanel";
import "./style.scss";

const SDKContainer = () => {
  const [filter, setFilter] = useState({ type: "radio", data: "all" });

  return (
    <div className="sdkContainer">
      <OptionsPanel filter={setFilter} />
      <ViewPanel filter={filter} />
    </div>
  );
};

export default SDKContainer;
