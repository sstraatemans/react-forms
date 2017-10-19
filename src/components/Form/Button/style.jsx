import styled, { keyframes } from "styled-components";

const iconRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const ButtonBar = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const StyledButtonWrapper = styled.div`
  display: inline-block;
  &:after {
    position: relative;
    display: inline-block;
    right: 33px;
    top: -1px;
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid white;
    border-left: 0;
    border-top: 0;
    transform: rotate(-45deg);
    transition: all 0.5s;
  }

  ${props =>
    props.isLoading &&
    `
    &:after {
      right: 30px;
      border-radius: 50px;
      transition: all 0.5s;
      animation: ${iconRotate} 2s infinite linear;
    }
  `} &:hover {
    &:after {
      right: 30px;
    }

    input {
      background: rgba(234, 98, 49, 1); /* Old browsers */
      background: linear-gradient(
        to right,
        rgba(237, 130, 33, 1) 72%,
        rgba(234, 98, 49, 1) 100%
      );
    }
  }
`;

export const StyledButton = styled.input`
  width: 270px;
  padding: 20px 30px;
  border: 0;
  border-radius: 30px;
  text-align: left;

  font-size: 16px;
  font-weight: 100;
  text-transform: uppercase;
  color: white;

  cursor: pointer;
  background: rgb(237, 130, 33); /* Old browsers */
  background: linear-gradient(
    to right,
    rgba(237, 130, 33, 1) 0%,
    rgba(234, 98, 49, 1) 100%
  );
`;
