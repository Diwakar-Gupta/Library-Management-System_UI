import React from "react";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";
const axios =  require('axios');


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        fullname: null,
        email: null,
        error: null,
    };
    this.linkhistory = [
      {
        url: '/',
        name: 'pages',
      },
      {
        url: '/profile/',
        name: 'profile',
      },
    ];
  }

  componentDidMount() {
    axios.get(`/auth/account/`)
      .then(res => {
        const username = res.data.username;
        const fullname = res.data.fullname;
        const email = res.data.email;
        
        this.setState({ username, fullname, email});
      })
      .catch( (err) => {
        const error = err.message;
        this.setState({ username: error });
      });
  }

  render() {
    const loaded = this.state.username != null;

    return (
        <DefaultLayout linkhistory={this.linkhistory}>
          <div className="lendings_page">
              {loaded?(
                <div>
                    <p>UserName: {this.state.username}</p>
                    <p>Fullname: {this.state.fullname}</p>
                    <p>Email: {this.state.email}</p>
                </div>
              ):(
                  <p>Loading</p>
              )
              }
          </div>
      </DefaultLayout>
    );
  }
}