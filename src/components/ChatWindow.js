import React, { useState, useEffect, useRef } from 'react'
// import useMessages from '../hooks/useMessages'
import { socket } from '../contexts/socket'
import ChatMessage from './ChatMessage'

export default function ChatWindow() {
    // const [messages, setMessages] = useMessages
    const [messages, setMessages] = useState([])
    const endOfMessages = useRef()

    const scrollToLastMessage = () => {
        endOfMessages.current.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        socket.on('send_message', message => {
            setMessages(prevMsgs => [...prevMsgs, message])
        })

        return () => {
            socket.off('send_message')
        }
    }, [])

    useEffect(scrollToLastMessage, [messages])   

    return (
        <div id="chatWindow">
            {messages.map(message => {
                return <ChatMessage 
                    sender={message.sender}
                    message={message.message}
                    timeSent={message.timeSent}
                />
            })}
            <div ref={endOfMessages} />
        </div>
    )
}