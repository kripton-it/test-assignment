import React from 'react';
import axios from 'axios';

import * as Styles from './styles';

// import { trim, maxSynopsisLength } from '../../utils';

class BookPage extends React.Component {
  constructor() {
    super();
    this.state = {
      book: null,
      isLoading: true,
      hasError: false
    };
  }

  async componentDidMount() {
    const url = `http://localhost:5000/books/${this.props.slug}`;
    try {
      const response = await axios.get(url);
      this.setState({
        book: response.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true
      })
    }
  }

  render() {
    const { book, isLoading, hasError } = this.state;
    if (isLoading) {
      return <h1>...loading</h1>;
    }
    if (hasError) {
      return <h1>something went wrong</h1>;
    }
    const { title, author, cover, synopsis } = book;
    return (
      <Styles.BookContainer>
        <Styles.BookItemAuthor>{author}</Styles.BookItemAuthor>
        <Styles.BookItemTitle>{title}</Styles.BookItemTitle>

        <Styles.BookItemSynopsis>{synopsis}</Styles.BookItemSynopsis>
        <Styles.BookItemCover>
          <Styles.BookItemImg src={cover} alt={title} />
        </Styles.BookItemCover>
      </Styles.BookContainer>
    );
  }
}

export default BookPage;