import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Loading from "components/loading";

import DataTable from './datatable';
import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
import Filters from './filters';
import Paginate from './paginater';

const axios =  require('axios');


class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      page: null,
      error:null,
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
          page,
          error:null,
        });
      })
      .catch(err => {
        const error = `${err.response.status} ${err.response.statusText}`;
        this.setState({error});
      })
  }

  bookClickHandle(isbn) {
    this.props.router.navigate(`/book/${isbn}/`);
  }

  render() {
    const loaded = this.state.books != null;
    const { error } = this.state;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <Card className="text-center">
            <Card.Header>
              <Filters title="Books"/>
            </Card.Header>
            <Card.Body>
              {loaded?(
                <DataTable books={this.state.books} bookClickHandle={ (isbn) => { this.bookClickHandle(isbn) } }/>
              ):
                error?(<p>{error}</p>):(<Loading/>)
              }
            </Card.Body>
            <Card.Footer><Paginate page={ this.state.page } setPage={ (url) => {this.fetchData(url)} }/></Card.Footer>
          </Card>
      </DefaultLayout>
    );
  }
}

function BookListWrapper() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <BookList router={{location, navigate, params}} />
}
export default BookListWrapper;