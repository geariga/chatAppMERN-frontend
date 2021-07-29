import { createContext, useContext, useEffect } from 'react'
import { useSocket } from '../contexts/SocketProvider'
import axios from 'axios'

const ChatContext = createContext({})

export function useChats() {
    return useContext(ChatContext)
}

export function ChatProvider({children}) {
    const socket = useSocket()

    const getMessages = async (roomIds = []) => {
        
    }

    const chatroomManager = {
        rooms: [],
        messages: [],
        getAllChatMessages: undefined,
        addToChatsMessages: undefined,
        createChatroom: undefined,
    }

    useEffect(() => {
        if (!socket) {
            return
        }

        socket.on('connection', () => {
            console.log('someone connected')
        })

        return () => {
            socket.off('connection')
        }
    }, [socket])

    return (
        <ChatContext.Provider value={chatroomManager}>
            {children}
        </ChatContext.Provider>
    )
}