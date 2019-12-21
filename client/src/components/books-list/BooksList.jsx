import React from 'react';
import axios from 'axios';

import { BooksListContainer } from './styles';

class Test extends React.Component {
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
    return (
      <BooksListContainer>
        {booksList.map(book => <p>{book.synopsis}</p>)}
      </BooksListContainer>
    );
  }
}

export default Test;