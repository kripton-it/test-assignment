import React from 'react';

import * as Styles from './styles';

import { trim, maxSynopsisLength } from '../../utils';

class BookItem extends React.Component {
  render() {
    const { title, author, cover, synopsis, slug } = this.props.book;
    const url = `/book/${slug}`;
    const trimmedSynopsis = trim(synopsis, maxSynopsisLength);
    return (
      <Styles.BookItemContainer>
        <Styles.BookItemCover>
          <Styles.BookCoverLink to={url}>
            <Styles.BookItemImg src={cover} alt={title} />
          </Styles.BookCoverLink>
        </Styles.BookItemCover>
        <Styles.BookTitleLink to={url}>
          <Styles.BookItemTitle>{title}</Styles.BookItemTitle>
        </Styles.BookTitleLink>
        <Styles.BookItemAuthor>{author}</Styles.BookItemAuthor>

        <Styles.BookItemSynopsis>{trimmedSynopsis}</Styles.BookItemSynopsis>
      </Styles.BookItemContainer>
    );
  }
}

export default BookItem;