
import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom"

import './header.css';

export default function Header(props) {
    return (
        <Breadcrumb style={{'height': '3rem', 'padding': '1rem'}}>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/books/" }}>
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active linkAs={Link} linkProps={{ to: "/books/" }}>
                Data
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}
