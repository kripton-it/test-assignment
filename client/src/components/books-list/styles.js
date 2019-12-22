import styled from "styled-components";

export const BooksListContainer = styled.section`
  position: relative;
  background-color: #ffffff;
  width: 100%;
`;

BooksListContainer.displayName = 'BooksListContainer';

export const BooksList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;

BooksList.displayName = 'BooksList';