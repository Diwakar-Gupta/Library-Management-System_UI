import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";

const axios =  require('axios');

class LendingDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lending:null
      };
      this.linkhistory = [
        {
          url: '/',
          name: 'pages',
        },
        {
          url: '/lendings/',
          name: 'lendings',
        },
        {
          url: `/lending/${this.props.router.params.pk}/`,
          name: 'lending',
        },
      ];
    }

    componentDidMount() {
      const url = `/api/lendings/${this.props.router.params.pk}/`;
      this.fetchData(url);
    }
    
    fetchData(url='') {
      if(url === '')
        url = `/api/lendings/${this.props.router.params.pk}/`;
      
      axios.get(url)
        .then(res => {
          const lending = res.data;
          this.setState({ 
            lending,
          });
        })
        .catch(err => {
          const error = `${err.response.status} ${err.response.statusText}`;
          this.setState({error});
        })
    }

    detail(lending) {
      return (
        <div>
              <p>pk = {lending.pk}</p>
              <p>creation_date = {lending.creation_date}</p>
              <p>due_date = {lending.due_date}</p>
              <p>return_date = {lending.return_date}</p>
              <p>fine = {lending.fine}</p>
              
              <br/>
              <p>Book</p>
              <p>barcode = {lending.book_item.barcode}</p>
              <p>title = {lending.book_item.title}</p>
              <p>format = {lending.book_item.format}</p>

              <br/>
              <p>Account</p>
              <p>id = {lending.account.id}</p>
              <p>name = {lending.account.name}</p>
              <p>status = {lending.account.status}</p>
              <p>issued_book_count = {lending.account.issued_book_count}</p>
              </div>
      );
    }

    render() {
      const { lending, error } = this.state;

      return (
            <DefaultLayout linkhistory={this.linkhistory}>
                {lending?( this.detail(lending) ): (<p>{error}</p>)}
              
            </DefaultLayout>
      );
    }
}

function LendingDetailWrapper() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <LendingDetail router={{location, navigate, params}} />
}
export default LendingDetailWrapper;