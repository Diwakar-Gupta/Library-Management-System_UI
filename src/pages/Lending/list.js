import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Card from 'react-bootstrap/Card';

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
import DataTable from './datatable';
import Filters from './filters';
import Paginate from './paginater';
import Loading from "components/loading";

const axios =  require('axios');


class Lending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lendings: null,
      page: null,
      error:null,
    };
    this.linkhistory = [
      {
        url: '/',
        name: 'pages',
      },
      {
        url: '/lendings/',
        name: 'lending',
      },
    ];
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData(url=`/api/lendings/`) {
    axios.get(url)
      .then(res => {
        const lendings = res.data['results'];
        const page = {}
        page.count = res.data.count;
        page.next = res.data.next;
        page.previous = res.data.previous;
        
        this.setState({ 
          lendings,
          page
        });
      })
      .catch(err => {
        const error = `${err.response.status} ${err.response.statusText}`;
        this.setState({error});
      })
  }

  lendingClickHandle(pk) {
    this.props.router.navigate(`/lending/${pk}/`);
  }

  render() {
    const loaded = this.state.lendings != null;
    const { error } = this.state;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <Card className="text-center">
            <Card.Header>
              <Filters title="Lendings"/>
            </Card.Header>
            <Card.Body>
              {loaded?(
                <DataTable lendings={this.state.lendings} lendingClickHandle={ (pk) => { this.lendingClickHandle(pk); } } />
              ):(
                error?(<p>{error}</p>):(<Loading/>)
              )}
            </Card.Body>
            <Card.Footer><Paginate page={ this.state.page } setPage={ (url) => {this.fetchData(url)} }/></Card.Footer>
          </Card>
      </DefaultLayout>
    );
  }
}

function LendingListWrapper() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <Lending router={{location, navigate, params}} />
}
export default LendingListWrapper;