import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
`;

export const FormFieldError = styled.div`
  font-size: 12px;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.errorColor};
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
  ${props =>
    props.validationError &&
    `
    color: ${props.theme.errorColor};
  `};
`;
