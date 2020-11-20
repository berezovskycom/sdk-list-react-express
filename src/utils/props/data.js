import PropTypes from "prop-types";

const data = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    tags: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    name: PropTypes.string
  })
);

export default data;