import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookItemContainer = styled.li`
  outline: 1px solid green;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookLink = styled(Link)`
  color: yellow;
  transition: all 0.5s;

  &:hover {
    color: red;
  }
`;

export const BookItemTitle = styled.h1`
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