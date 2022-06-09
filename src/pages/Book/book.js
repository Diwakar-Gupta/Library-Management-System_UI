import React from "react";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
const axios =  require('axios');

axios.defaults.headers.common['Authorization'] = "Token 12b85098b8ec8df108fe0cd6d7576ac362ae04a7"

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/books/`)
      .then(res => {
        const books = res.data['results'];
        this.setState({ books });
      })
  }

  render() {
    return (
        <DefaultLayout>
          <div className="book_page">
          <h1>Book List</h1>
            <ul>
              {
                this.state.books
                  .map(book =>
                    <li key={book.isbn}> {book.title} </li>
                  )
              }
            </ul>
          </div>
      </DefaultLayout>
    );
  }
}
