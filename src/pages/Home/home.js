import React from "react";
import { Link } from "react-router-dom"

/*
Path should not start with
1.  api/
2.  admin/
3.  auth/
*/

export default function Home() {

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
    </div>
  )
}
