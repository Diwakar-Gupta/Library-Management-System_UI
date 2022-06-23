import React from "react";
import { Link } from "react-router-dom"

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Notification from './notification';
import './header.css';

const axios =  require('axios');

function logout(){
    axios.get('/auth/logout/')
    .then( (e)=>{} )
    .catch((e)=>{})
    .finally( ()=>{
        window.location.reload();
    } )
}

export default function Header({ linkhistory }) {

    if(!linkhistory)linkhistory=[];
    return (
        <Navbar expand="md">
            <Navbar variant="light">
                <Container>
                 <Breadcrumb >
                     {linkhistory
                     .map( (link) => 
                         <Breadcrumb.Item key={link.name} linkAs={Link} linkProps={{ to: link.url }}>
                             { link.name }
                         </Breadcrumb.Item>
                      )}
                 </Breadcrumb>
                </Container>
            </Navbar>
            <Navbar.Collapse className="justify-content-end">
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                <Notification/>
                <NavDropdown title={<FontAwesomeIcon color={"black"} icon={faUser} />} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/auth/login/">Login</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}
