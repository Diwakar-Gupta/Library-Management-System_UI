import React from "react";
import Card from 'react-bootstrap/Card';

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
import DataTable from './datatable';
import Filters from './filters';
import Paginate from './paginater';
import Loading from "components/loading";

const axios =  require('axios');
// axios.defaults.headers.common['Authorization'] = "Token 3039b53d7e6932822ab3320c731ff1d8d61d63c0";

export default class Lending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lendings: null,
      page: null,
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
  }

  render() {
    const loaded = this.state.lendings != null;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <Card className="text-center">
            <Card.Header>
              <Filters title="Lendings"/>
            </Card.Header>
            <Card.Body>
              {loaded?(
                <DataTable lendings={this.state.lendings}/>
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
