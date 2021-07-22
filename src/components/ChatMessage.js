import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'

export default function ChatMessage({message, sender, timeSent}) {
    const { currentUser } = useContext(UserContext)

    return (
        <p className={currentUser === sender ? `chatMessage sentMessage` : `chatMessage`}>
            <span className="messageSender">{sender}</span>
            {message}
            <span className="chatTimestamp">{timeSent}</span>
        </p>
    )
}