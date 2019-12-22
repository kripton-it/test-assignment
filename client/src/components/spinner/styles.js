import styled, { keyframes } from "styled-components";

const changeContent = keyframes`
  10% { content: "⠙"; }
  20% { content: "⠹"; }
  30% { content: "⠸"; }
  40% { content: "⠼"; }
  50% { content: "⠴"; }
  60% { content: "⠦"; }
  70% { content: "⠧"; }
  80% { content: "⠇"; }
  90% { content: "⠏"; }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

SpinnerContainer.displayName = 'SpinnerContainer';

export const SpinnerBody = styled.div`
  color: #2f4a8f;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    animation: ${changeContent} .5s linear infinite;
    display: block;
    content: "⠋";
    font-size: 80px;
  }
`;

SpinnerBody.displayName = 'SpinnerBody';