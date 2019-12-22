import React from 'react';
import axios from 'axios';

import { BookItem } from '../index';

import * as Styles from './styles';

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = {
      booksList: [],
      isLoading: true
    };
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:5000/books");
    this.setState({
      booksList: response.data.books,
      isLoading: false
    });
  }
  render() {
    const { booksList, isLoading } = this.state;
    if (isLoading) {
      return <h1>...loading</h1>;
    }
    const booksToShow = booksList.slice(0, 4);
    return (
      <Styles.BooksListContainer>
        {booksToShow.map(book => <BookItem key={book.slug} book={book} />)}
      </Styles.BooksListContainer>
    );
  }
}

export default BooksList;