import React from "react";
import FormField from "./../FormField";

const TextInput = props => {
  return <input type="text" {...props} />;
};

export default FormField(TextInput);
