import React from 'react';

import * as Styles from './styles';

class BookItem extends React.Component {
  render() {
    const { title, author, cover, synopsis } = this.props.book;
    return (
      <Styles.BookItemContainer>
        <Styles.BookItemAuthor>{author}</Styles.BookItemAuthor>
        <Styles.BookItemTitle>{title}</Styles.BookItemTitle>
        <Styles.BookItemSynopsis>{synopsis}</Styles.BookItemSynopsis>
        <Styles.BookItemCover>
          <Styles.BookItemImg src={cover} alt={title} />
        </Styles.BookItemCover>
      </Styles.BookItemContainer>
    );
  }
}

export default BookItem;