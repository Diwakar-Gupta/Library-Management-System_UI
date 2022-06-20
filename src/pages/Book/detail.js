import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";


class BookDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      const isbn = this.props.router.params.isbn;

      return (
          <p>Isbn ={isbn}</p>
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