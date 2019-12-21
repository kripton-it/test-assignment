import React from 'react';
import axios from 'axios';

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
    return booksList.map(book => <p>{book.title}</p>)
  }
}

export default Test;