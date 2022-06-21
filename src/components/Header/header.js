
import React from "react";
import { Link } from "react-router-dom"

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Overlay from 'react-bootstrap/Overlay'
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry } from '@fortawesome/free-solid-svg-icons'

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
            <OverlayTrigger
                trigger="click"
                placement={"bottom"}
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                    <Popover.Header as="h3">{`Notifications`}</Popover.Header>
                    <Popover.Body>
                        <strong>No notifications for now</strong> Check this info.
                    </Popover.Body>
                    </Popover>
                }
                >
                    <Nav.Link>
                        <FontAwesomeIcon color={"black"} icon={faAngry} />
                    </Nav.Link>
            </OverlayTrigger>

            </Navbar.Collapse>
        </Navbar>
    );
}
