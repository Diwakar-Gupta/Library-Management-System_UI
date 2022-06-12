import React from "react";
import "./defaultLayout.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components
import Header from "components/Header/header";
import SideBar from "components/Sidebar/sidebar";

export default function DefaultLayout({ children }) {
	return (
		<Row style={{'height': '100%'}}>
			<Col xs={4}>
				<SideBar />
			</Col>
			<Col>
				<Header/>
				<div style={{'height':'1rem'}}></div>
				{children}
			</Col>
		</Row>
	);
}
