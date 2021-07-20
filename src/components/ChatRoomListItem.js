import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Avatar from './Avatar'

export default function ChatRoomListItem(props) {
    return (
        <ListGroup.Item variant="light" className="py-4" action>
            <Avatar />
            <div>
                <h6>{props.roomName}</h6>
                <p>{props.lastMessage}</p>
            </div>
        </ListGroup.Item>
    )
}
