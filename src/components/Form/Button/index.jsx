// @flow
import React from "react";
import { StyledButton, StyledButtonWrapper } from "./style";

type Props = {
  isLoading: boolean,
  label: string
};

const Button = (props: Props) => {
  return (
    <StyledButtonWrapper isLoading={props.isLoading ? "true" : ""}>
      <StyledButton type="submit" value={props.label} />
    </StyledButtonWrapper>
  );
};

export default Button;
