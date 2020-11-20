/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "../../../components/List";
import "./style.scss";
import Title from "../../../components/Title";

const ViewPanel = ({ filter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const body = JSON.stringify({ filter });

    fetch("http://localhost:8080/filterSdks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(setData);
  }, [filter]);

  return (
    <div className="sdkViewPanel">
      <List>
        {data.map((item, i) => (
          <li key={`li-${item.id + i}`} className="list__item">
            <Title text={item.title} size={3} />
            <List disc className="sdkViewPanel__tags">
              {item.tags &&
                item.tags.map((tag, n) => <li key={`tag-${i}-${n}`}>{tag}</li>)}
            </List>
          </li>
        ))}
      </List>
    </div>
  );
};

ViewPanel.propTypes = {
  filter: PropTypes.shape({
    type: PropTypes.string,
    data: PropTypes.string
  }).isRequired
};

export default ViewPanel;
