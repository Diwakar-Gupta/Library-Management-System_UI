import React, { useState, useEffect } from "react";

import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const axios =  require('axios');


export default function Notification(props) {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('/api/notifications/')
        .then(res => {
          const notis = res.data['results'];
          setNotifications(notis);
        })
        .catch(err => {
            setNotifications([]);
        })
      }, []);


    return (
        <OverlayTrigger
            trigger="click"
            placement={"bottom"}
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                <Popover.Header as="h3">{`Notifications`}</Popover.Header>
                {/* <Popover.Body> */}
                    <ToastContainer className='p2'>
                        {notifications.length>0?(
                            notifications
                            .map( noti => 
                                <Toast key={ noti.pk}>
                                    <Toast.Header closeButton={!noti.is_read}>
                                    <strong className="me-auto">{'Issue'}</strong>
                                    <small className="text-muted">{ new Date(noti.created_on).toDateString() }</small>
                                    </Toast.Header>
                                    <Toast.Body>{ noti.content }</Toast.Body>
                                </Toast>
                            )
                        ):(
                            <ListGroup.Item>
                                <strong>No notifications for now</strong>
                            </ListGroup.Item>
                        )}
                    </ToastContainer>
                {/* </Popover.Body> */}
                </Popover>
            }
            >
                <Nav.Link>
                    <FontAwesomeIcon color={"black"} icon={faBell} />
                </Nav.Link>
        </OverlayTrigger>
    );
}