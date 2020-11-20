import React from "react";
import PropTypes from "prop-types";
import Radio from "../components/Radio";
import dataProps from "../../../../utils/props/data";

const Tags = ({ data, setFilter }) => {
  const getTags = () => {
    const tags = ["all"];
    data.map((item) => item.tags && item.tags.map((tag) => tags.push(tag)));
    return [...new Set(tags)];
  };

  return getTags().map((tag) => (
      <label className="optionsPanel__label" htmlFor={`radio-${tag}`} key={tag}>
        <Radio
          tag={tag}
          setFilter={setFilter}
        />
        {tag}
      </label>
  ));
};

Tags.propTypes = {
  data: dataProps.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Tags;
