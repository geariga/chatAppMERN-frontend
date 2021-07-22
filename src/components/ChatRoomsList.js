import React from 'react'
import ChatRoomListItem from './ChatRoomListItem'
import ListGroup from 'react-bootstrap/ListGroup'

export default function ChatRoomsList() {
    const chats = new Array(15).fill({
        roomName: 'Test Room',
        lastMessage: 'this was the final message sent to the chat room.' +
            ' this is intentionally a long string used for testing' +
            ' this is intentionally a long string used for testing' +
            ' this is intentionally a long string used for testing' +
            ' this is intentionally a long string used for testing'
    })
    return (
        <ListGroup>
            {chats.map((chat, i) => {
                return <ChatRoomListItem 
                    key={`${chat.roomName}${i}`}
                    roomName={chat.roomName}
                    lastMessage={chat.lastMessage}
                />
            })}
        </ListGroup>
    )
}