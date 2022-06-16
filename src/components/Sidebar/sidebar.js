import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom"


import './sidebar.css';

export default function SideBar(props) {
    return (
        <Col>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                        alt=""
                        src="/favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        LMS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Nav defaultActiveKey="/home" as="ul" className="flex-column m-3">
                <Nav.Item as="li">
                        
                <Nav.Link as={Link} to="/books">
                    Book
                </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/lendings">Lending</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/reservations">Reservation</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    );
}
