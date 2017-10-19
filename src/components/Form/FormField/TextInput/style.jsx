import styled from "styled-components";

export const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: 1px solid #a0a0a0;
  border-radius: 1px;
  background-color: #fbfbfb;
  font-size: 16px;
  font-weight: 100;

  ${props =>
    props.validationError &&
    `
    border-color: ${props => props.theme.errorColor};
    background-color: #fef4f4;
    color: ${props => props.theme.errorColor};
  `};
`;
