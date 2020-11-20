import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Tags from "./Tags";
import "./style.scss";

const OptionsPanel = ({ filter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/sdks")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="optionsPanel">
      <form className="optionsPanel__form">
        <Search setFilter={filter} />
        <Tags data={data} setFilter={filter} />
      </form>
    </div>
  );
};

OptionsPanel.propTypes = {
  filter: PropTypes.func.isRequired
};

export default OptionsPanel;
