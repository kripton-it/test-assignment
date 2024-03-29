import React from 'react';
import axios from 'axios';

import { BookItem, Pagination, ErrorMessage, Spinner } from '../index';

import * as Styles from './styles';

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = {
      booksList: [],
      isLoading: false,
      hasError: false,
      currentPage: 0,
      pageNumber: 0
    };
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    try {
      const response = await axios.get("http://localhost:5000/books");
      this.setState({
        booksList: response.data.books,
        isLoading: false,
        currentPage: 1,
        pageNumber: Math.ceil(response.data.books.length / 4)
      });
    } catch (error) {
      this.setState({
        hasError: true,
        isLoading: false
      });
    }
  }
  render() {
    const { booksList, isLoading, hasError, currentPage, pageNumber } = this.state;
    if (hasError) {
      return <ErrorMessage />;
    }
    if (isLoading) {
      return <Spinner />;
    }
    const startBooxIndex = 4 * (currentPage - 1);
    const booksToShow = booksList.slice(startBooxIndex, startBooxIndex + 4);
    return (
      <Styles.BooksListContainer>
        <Styles.BooksList>
          {booksToShow.map(book => <BookItem key={book.slug} book={book} />)}
        </Styles.BooksList>
        <Pagination
          currentPage={currentPage}
          pageNumber={pageNumber}
          onNextClick={this.onNextClick}
          onPrevClick={this.onPrevClick}
        />
      </Styles.BooksListContainer>
    );
  }
  onNextClick = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1
    }));
  }
  onPrevClick = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage - 1
    }));
  }
}
export default BooksList;