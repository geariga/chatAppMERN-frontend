import React, { useState, useContext } from 'react'
// import useMessages from '../hooks/useMessages'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { SocketContext } from '../contexts/socket'
import { UserContext } from '../contexts/user'

export default function MessageInput() {
    const socket = useContext(SocketContext)
    const { currentUser } = useContext(UserContext)
    // const [messages, setMessages] = useMessages()
    const [messageText, setMessageText] = useState('')

    const handleMessageSubmit = () => {
        const trimmedMessage = messageText.trim()
        if (trimmedMessage.length > 0) {
            socket.emit('send_message', {
                sender: currentUser,
                message: trimmedMessage,
                roomId: 'testRoom',
                timeSent: new Date().toUTCString()
            })
            setMessageText('')
        }
    }

    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            handleMessageSubmit()
        }
    }

    return (
        <div>
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <Button className='input-group-text'>
                        <i className="fas fa-paperclip fa-1x"></i>
                    </Button>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                    <Button 
                        className='input-group-text'
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={handleMessageSubmit}
                    >
                        <i className="fas fa-paper-plane fa-1x"></i>
                    </Button>
                </InputGroup.Prepend>
                <FormControl
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={handleKeypress}
                    placeholder="Type a message"
                    aria-label="Type a message"
                    aria-describedby="search-input"
                />
            </InputGroup>
        </div>
    )
}