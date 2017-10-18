import React from "react";
import PropTypes from "prop-types";
import FormField from "./../FormField";

const CheckBox = props => {
  return (
    <div>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        checked={props.value ? "checked" : ""}
      />
      <label htmlFor={props.name}>
        <span />
        {props.children}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  children: PropTypes.array
};

export default FormField(CheckBox);
