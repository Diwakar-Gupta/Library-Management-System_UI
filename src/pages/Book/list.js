import React from "react";

import Card from 'react-bootstrap/Card';
import Loading from "components/loading";

import DataTable from './datatable';
import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
import Filters from './filters';
import Paginate from './paginater';

const axios =  require('axios');


export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      page: null,
    };
    this.linkhistory = [
      {
        url: '/',
        name: 'pages',
      },
      {
        url: '/books/',
        name: 'books',
      },
    ];
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData(url=`/api/books/`) {
    axios.get(url)
      .then(res => {
        const books = res.data['results'];
        const page = {}
        page.count = res.data.count;
        page.next = res.data.next;
        page.previous = res.data.previous;
        
        this.setState({ 
          books,
          page
        });
      })
  }

  bookClickHandle(isbn) {
    console.log(`book clicked with isbn ${isbn}`);
  }

  render() {
    const loaded = this.state.books != null;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <Card className="text-center">
            <Card.Header>
              <Filters title="Books"/>
            </Card.Header>
            <Card.Body>
              {loaded?(
                <DataTable books={this.state.books} bookClickHandle={ (isbn) => { this.bookClickHandle(isbn) } }/>
              ):(
                <Loading/>
              )}
            </Card.Body>
            <Card.Footer><Paginate page={ this.state.page } setPage={ (url) => {this.fetchData(url)} }/></Card.Footer>
          </Card>
      </DefaultLayout>
    );
  }
}