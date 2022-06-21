import React from "react";
import "./defaultLayout.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components
import Header from "components/Header/header";
import SideBar from "components/Sidebar/sidebar";

export default function DefaultLayout({ children, linkhistory }) {
	return (
		<Row style={{'width': '100%'}}>
			<Col xs={12} sm={2} >
				<SideBar />
			</Col>
			<Col>
				<Header linkhistory={linkhistory} />
				<div style={{'height':'1rem'}}></div>
				{children}
			</Col>
		</Row>
	);
}
