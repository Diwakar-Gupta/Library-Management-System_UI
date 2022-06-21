import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";


class BookDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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

    render() {
      const isbn = this.props.router.params.isbn;

      return (
          <DefaultLayout linkhistory={this.linkhistory}>
            <p>Isbn ={isbn}</p>
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