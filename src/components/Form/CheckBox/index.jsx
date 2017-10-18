// @flow
import React from "react";
import FormField from "./../FormField";

type Props = {
  name: string,
  onChange: Function,
  onBlur: Function,
  value: string,
  children: Array<any>
};

const CheckBox = (props: Props) => {
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

export default FormField(CheckBox);
