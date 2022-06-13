import React from "react";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
import Loading from "components/loading";
const axios =  require('axios');


export default class Lending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    axios.get(`/api/books/`)
      .then(res => {
        const items = res.data['results'];
        this.setState({ items });
      })
  }

  render() {
    const loaded = this.state.items != null;
    const linkhistory = [
      {
        url: '/',
        name: 'pages',
      },
      {
        url: '/book/',
        name: 'book',
      },
    ]

    return (
        <DefaultLayout linkhistory={linkhistory}>
          <div className="books_page">
            <ul>
              {loaded?(
                  this.state.items
                    .map(book =>
                      <li key={book.isbn}> {book.title} </li>
                    )
              ):(
                  <Loading/>
              )
              }
            </ul>
          </div>
      </DefaultLayout>
    );
  }
}