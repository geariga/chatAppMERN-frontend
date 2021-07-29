import io from 'socket.io-client'
import React, { useState, useEffect, useContext } from 'react'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({token, children}) {
    const [userSocket, setUserSocket] = useState()

    useEffect(() => {
        const socket = io(
            'http://127.0.0.1:3005',
            {auth: { token: token }}
        )
        setUserSocket(socket)
        console.log(socket)

        return () => {
            socket.close()
        }
    }, [token])

    return <>
        <SocketContext.Provider value={userSocket}>
            {children}
        </SocketContext.Provider>
    </>
}