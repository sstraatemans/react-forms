// @flow
import React from "react";
import "./index.css";

type Props = {
  isLoading: boolean,
  label: string
};

const Button = (props: Props) => {
  return (
    <div className={`button ${props.isLoading ? " loading" : ""}`}>
      <input className="buttontype" type="submit" value={props.label} />
    </div>
  );
};

export default Button;
