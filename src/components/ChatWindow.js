import React from 'react'
import ChatMessage from './ChatMessage'

export default function ChatWindow(props) {
    const tempMessages = Array(50).fill({
        sender: 'Andrew',
        content: 'This is my message This is my message This is my message This is my message This is my message This is my message '
    })

    return (
        <div id="chatWindow">
            {tempMessages.map((msg, i) => {
                const tempSender = i % 3 === 0 ? 'sentMessage' : ''
                return <ChatMessage
                    key={`CM${i}`} 
                    messageSender={msg.sender} 
                    messageContent={msg.content}
                    temp={tempSender}
                />
            })}
        </div>
    )
}