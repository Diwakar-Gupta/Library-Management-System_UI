import React from "react";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
const axios =  require('axios');


export default class Lending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    axios.get(`/api/lendings/`)
      .then(res => {
        const items = res.data['results'];
        this.setState({ items });
      })
  }

  render() {
    const loaded = this.state.items != null;

    return (
        <DefaultLayout>
          <div className="lendings_page">
            <ul>
              {loaded?(
                  this.state.items
                    .map(item =>
                      <li key={item.pk}> {item.account.name} issued {item.book_item.title} </li>
                    )
              ):(
                  <p>Loading</p>
              )
              }
            </ul>
          </div>
      </DefaultLayout>
    );
  }
}