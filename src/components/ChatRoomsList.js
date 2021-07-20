import React from 'react'
import ChatRoomListItem from './ChatRoomListItem'
import ListGroup from 'react-bootstrap/ListGroup'

export default function ChatRoomsList() {
    const tempData = new Array(10).fill({
        icon: '',
        name: 'Test Room',
        messages: ['message1', 'message2', 'message3', 'message4','message5']
    })
    return (
        <ListGroup>
            {tempData.map((room, i) => {
                return <ChatRoomListItem 
                    key={`CRLI${i}`}
                    roomName={room.name}
                    lastMessage={room.messages[0]}
                />
            })}
        </ListGroup>
    )
}