import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";

const axios =  require('axios');

class BookDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book: null,
        error: null
      };
      this.linkhistory = [
        {
          url: '/',
          name: 'home',
        },
        {
          url: '/books/',
          name: 'books',
        },
        {
          url: `/book/${this.props.router.params.isbn}/`,
          name: 'book',
        },
      ];
    }

    componentDidMount() {
      this.fetchData('');
    }

    fetchData(url='') {
      if(url === '')
        url = `/api/book/${this.props.router.params.isbn}/`;
      
      axios.get(url)
        .then(res => {
          const book = res.data;
          console.log(book);
          this.setState({ 
            book,
          });
        })
        .catch(err => {
          const error = `${err.response.status} ${err.response.statusText}`;
          this.setState({error});
        })
    }

    detail(book) {
      return (
        <div>
            <Card style={{ flexDirection: 'row' }}>
              {/* <Card.Img variant="bottom" style={{ width: '15rem' }} src="/book_img.jpeg" /> */}
              <Card.Header>
                <Card.Img variant="bottom" style={{ width: '15rem' }} src="/book_img.jpeg" />
              </Card.Header>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.subject}</Card.Subtitle>
                <br/>
                <Card.Text>
                Publisher(s): {book.publisher}
                <br/>
                ISBN: {book.isbn}
                <br/>
                Language: {book.language}
                <br/>
                <br/>
                
                { book.available?(<Badge bg="primary">Available {book.available}</Badge>):(<Badge bg="warning" text="dark">Not Available</Badge>) }
                <br/>

                Issued: {book.issued}
                <br/>
                Lost: {book.lost}
                <br/>
                Reserved: {book.reserved}
                <br/>

                Numer of pages: {book.numer_of_pages}
                <br/>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
        </div>
      );
    }

    render() {
      // const isbn = this.props.router.params.isbn;
      const { book, error } = this.state;

      return (
          <DefaultLayout linkhistory={this.linkhistory}>
            {book?( this.detail(book) ): (<p>{error}</p>)}
          </DefaultLayout>
      );
    }
}

function BookDetailWrapper() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <BookDetail router={{location, navigate, params}} />
}
export default BookDetailWrapper;