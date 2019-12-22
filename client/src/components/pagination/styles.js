import styled from "styled-components";

export const PaginationContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
`;

PaginationContainer.displayName = 'PaginationContainer';

const Button = styled.button`
  background-color: transparent;
  border: none;
  line-height: 40px;
  text-align: center;
  position: relative;
  font-size: 60px;
  cursor: pointer;
  color: #111111;
  opacity: 0.5;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const PrevButton = styled(Button)`
  position: absolute;
  left: 10px;
`;

PrevButton.displayName = 'PrevButton';

export const NextButton = styled(Button)`
  position: absolute;
  right: 10px;
`;

NextButton.displayName = 'NextButton';