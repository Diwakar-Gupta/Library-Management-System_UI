
import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

import './header.css';

export default function Header({ linkhistory }) {
    if(!linkhistory)linkhistory=[];
    return (
        <Navbar>
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
            </Navbar.Collapse>
        </Navbar>
    );
}
