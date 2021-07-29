import React, { useState, useEffect } from 'react'
import { SocketProvider } from './contexts/SocketProvider'
import { ChatProvider } from './contexts/ChatProvider'
import LoginWindow from './components/LoginWindow'
import SideBar from './components/SideBar'
import ContentWindow from './components/ContentWindow'
import ContentWindowNav from './components/ContentWindowNav'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'

function getStoredToken() {
    return localStorage.getItem('wat010203')
}

export default function App() {
    console.log('app rendered')
    const [token, setToken] = useState(getStoredToken())

    useEffect(() => {
        localStorage.setItem('wat010203', token)
    }, [token])

    const userInterface = (
        <SocketProvider token={token}>
            <ChatProvider>
                <SideBar />
                <ContentWindow>
                    <ContentWindowNav />
                    <ChatWindow />
                    <MessageInput />
                </ContentWindow>
            </ChatProvider>
        </SocketProvider>
    )

    return (
        token ? userInterface : <LoginWindow setToken={setToken} />
    )
}