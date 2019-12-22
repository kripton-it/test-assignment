import styled from "styled-components";

export const BookContainer = styled.div`
  background-color: #ffffff;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const BookItemTitle = styled.h1`
  color: red;
  font-size: 1.2rem;
`;

export const BookItemAuthor = styled.h2`
  color: green;
  font-size: 1rem;
`;

export const BookItemCover = styled.div`
  width: 70%;
  margin-top: auto;
`;

export const BookItemImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BookItemSynopsis = styled.p`
  color: gray;
`;