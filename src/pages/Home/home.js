import React from "react";
import { Link, useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';

const axios =  require('axios');
const user_credentials = [
  {
    name:'abrar',
    token: '12b85098b8ec8df108fe0cd6d7576ac362ae04a7',
  },
  {
    name:'atul',
    token: 'd29b338a10dab4967b6caa4a72ac665600a26f93',
  },
  {
    name:'librarian',
    token: 'f2a0633571393e72dcab70e8076c32121a020c99',
  },
  
]

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="home_container">
      This is home page
      <ul>
        <li key="books"> <Link to="/books">/books</Link> </li>
        <li key="lendings"> <Link to="/lendings">/lendings</Link> </li>
        <li key="reservations"> <Link to="/reservations">/reservations</Link> </li>
        <li key="profile"> <Link to="/profile/">/profile/</Link> </li>
        <li key="login"> <Link to="/login/">/login/</Link> </li>
      </ul>

      <p>Login as</p>
      <ul>
      {
        user_credentials
        .map( user => 
          <li key={user.name}>
            <Button variant='outline-primary' onClick={ () => { 
              axios.defaults.headers.common['Authorization'] = `Token ${user.token}`;
              axios.get('/api/lendings/')
              .finally( () => {
                navigate(`/profile/`);
              })
             } }>{user.name}</Button>
          </li>
        )
      }
      </ul>
    </div>
  )
}
