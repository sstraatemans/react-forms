// @flow
import React from "react";
import { Input } from "./style";
import FormField from "./../../FormField";

type Props = {
  validationError: boolean,
  id: string,
  name: string,
  value: string,
  onBlur: Function,
  onChange: Function,
  placeholder?: string
};

const TextInput = (props: Props) => {
  return <Input type="text" {...props} />;
};

export const UnWrapped = TextInput;
export default FormField(TextInput);
