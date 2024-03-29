import styled from "styled-components";
import { Link } from "react-router-dom";

export const BookItemContainer = styled.li`
  padding: 25px;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

BookItemContainer.displayName = 'BookItemContainer';

export const BookTitleLink = styled(Link)`
  color: #000000;
  opacity: 0.8;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
`;

BookTitleLink.displayName = 'BookTitleLink';

export const BookItemTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  font-size: 1.2rem;
`;

BookItemTitle.displayName = 'BookItemTitle';

export const BookItemAuthor = styled.h2`
  color: #777777;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

BookItemAuthor.displayName = 'BookItemAuthor';

export const BookCoverLink = styled(Link)`
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

BookCoverLink.displayName = 'BookCoverLink';

export const BookItemCover = styled.div`
  max-width: 80%;
  margin-bottom: 10px;
`;

BookItemCover.displayName = 'BookItemCover';

export const BookItemImg = styled.img`
  width: auto;
  height: 260px;
  max-width: 100%;
`;

BookItemImg.displayName = 'BookItemImg';

export const BookItemSynopsis = styled.p`
  color: gray;
  font-size: 14px;
  text-align: justify;
  hyphens: auto;
`;

BookItemSynopsis.displayName = 'BookItemSynopsis';