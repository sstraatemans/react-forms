import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Button = props => {
  return (
    <div className={`button ${props.isLoading ? " loading" : ""}`}>
      <input className="buttontype" type="submit" value={props.label} />
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default Button;
