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
      filters:{
        page_size: 5
      }
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
    const url=`/api/books/?page_size=${this.state.filters.page_size}`
    this.fetchData(url);
  }
  
  fetchData(url) {
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

  setFilters(filters){
    let newFilter = {...this.state.filters};

    for(let key in filters){
      newFilter[key] = filters[key];
    }
    
    this.setState({books:null,error:null,page:null, filters:newFilter});
    const url=`/api/books/?page_size=${newFilter.page_size}`;
    this.fetchData(url);
  }

  bookClickHandle(isbn) {
    this.props.router.navigate(`/book/${isbn}/`);
  }

  render() {
    const loaded = this.state.books != null;
    const { error, filters } = this.state;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <Card className="text-center">
            <Card.Header>
              <Filters filters={filters} setFilters={ (fil) => this.setFilters(fil) } title="Books"/>
            </Card.Header>
            <Card.Body>
              {loaded?(
                <DataTable books={this.state.books} bookClickHandle={ (isbn) => { this.bookClickHandle(isbn) } }/>
              ):
                error?(<p>{error}</p>):(<Loading/>)
              }
            </Card.Body>
            <Card.Footer><Paginate pageSize={this.state.filters.page_size} page={ this.state.page } setPage={ (url) => {this.fetchData(url)} }/></Card.Footer>
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