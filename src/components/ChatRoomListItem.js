import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Avatar from './Avatar'

export default function ChatRoomListItem({roomName, lastMessage}) {
    return (
        <ListGroup.Item 
            onClick={() => console.log('suh')}
            variant="light" 
            className="chatroom-li py-4" 
            action
        >
            <Avatar />
            <div>
                <h6>{roomName}</h6>
                <p>{lastMessage}</p>
            </div>
        </ListGroup.Item>
    )
}
