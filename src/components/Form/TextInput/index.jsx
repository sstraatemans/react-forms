// @flow
import React from "react";
import FormField from "./../FormField";

type Props = {
  id: string,
  name: string,
  value: string,
  onBlur: Function,
  onChange: Function,
  placeholder?: string
};

const TextInput = (props: Props) => {
  return <input type="text" {...props} />;
};

export default FormField(TextInput);
