import React from 'react'

export default function ChatMessage(props) {
    return (
        <p className={`chatMessage ${props.temp}`}>
            <span className="messageSender">{props.messageSender}</span>
            {props.messageContent}
            <span className="chatTimestamp">{new Date().toUTCString()}</span>
        </p>
    )
}