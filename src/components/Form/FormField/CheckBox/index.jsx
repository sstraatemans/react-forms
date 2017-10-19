// @flow
import React from "react";
import { CheckBoxWrapper, CheckBox, CheckBoxBox, Label } from "./style";
import FormField from "./../../FormField";

type Props = {
  validationError: boolean,
  name: string,
  onChange: Function,
  onBlur: Function,
  value: string,
  children: Array<any>
};

const StyledCheckBox = (props: Props) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={props.onChange}
      />
      <Label
        validationError={props.validationError ? "true" : ""}
        htmlFor={props.name}
      >
        <CheckBoxBox checked={props.value ? "checked" : ""} />
        {props.children}
      </Label>
    </CheckBoxWrapper>
  );
};

export default FormField(StyledCheckBox);
