import styled from "styled-components";

export const BookContainer = styled.article`
  background-color: #ffffff;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
`;

BookContainer.displayName = 'BookContainer';

export const BookInfo = styled.div`
  width: 80%;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
`;

BookInfo.displayName = 'BookInfo';

export const BookItemTitle = styled.h1`
  color: #2f4a8f;
  font-size: 1.6rem;
`;

BookItemTitle.displayName = 'BookItemTitle';

export const BookItemAuthor = styled.h2`
  margin: 0;
  padding: 0;
  color: grey;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

BookItemAuthor.displayName = 'BookItemAuthor';

export const BookItemCover = styled.div`
  width: 20%;
  margin-right: auto;
  display: flex;
`;

BookItemCover.displayName = 'BookItemCover';

export const BookItemImg = styled.img`
  width: auto;
  max-width: 100%;
`;

BookItemImg.displayName = 'BookItemImg';

export const BookItemSynopsis = styled.p`
  color: #2f4a8f;
  margin-bottom: auto;
  text-align: justify;
`;

BookItemSynopsis.displayName = 'BookItemSynopsis';

export const BookItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

BookItemDetails.displayName = 'BookItemDetails';

export const BookItemRating = styled.div`
  width: 100px;
  height: 100px;
  border-width: 5px;
  border-style: solid;
  border-color: ${props => props.rating > 9 ? "green" : "red"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.rating > 9 ? "green" : "red"};
  margin-right: 50px;
`;

BookItemRating.displayName = 'BookItemRating';

export const BookItemVotes = styled.div`
  position: relative;
`;

BookItemVotes.displayName = 'BookItemVotes';

export const BookItemLike = styled.div`
  cursor: ${props => props.upvoted ? "default" : "pointer"};
  opacity: 0.5;
  transition: all 0.5s;

  &:hover {
    opacity: ${props => props.upvoted ? 0.5 : 1};
  }
`;

BookItemLike.displayName = 'BookItemLike';

export const BookItemVotesNumber = styled.div`
  position: absolute;
  top: 60%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: ${props => props.upvoted ? "gray" : "green"};
`;

BookItemVotesNumber.displayName = 'BookItemVotesNumber';