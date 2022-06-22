import React, { useState, useEffect } from "react";

import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const axios =  require('axios');


export default function Notification({}) {

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
                    <ListGroup>
                        {notifications.length>0?(
                            notifications
                            .map( noti => 
                                <ListGroup.Item key={ noti.pk} variant={noti.is_read?'':'info'}>
                                    { noti.content }
                                </ListGroup.Item>
                            )
                        ):(
                            <ListGroup.Item>
                                <strong>No notifications for now</strong>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
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