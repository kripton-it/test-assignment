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
        <Styles.BookItemAuthor>{author}</Styles.BookItemAuthor>
        <Styles.BookLink to={url}>
          <Styles.BookItemTitle>{title}</Styles.BookItemTitle>
        </Styles.BookLink>

        <Styles.BookItemSynopsis>{trimmedSynopsis}</Styles.BookItemSynopsis>
        <Styles.BookItemCover>
          <Styles.BookItemImg src={cover} alt={title} />
        </Styles.BookItemCover>
      </Styles.BookItemContainer>
    );
  }
}

export default BookItem;