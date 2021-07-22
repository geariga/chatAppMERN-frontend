import io from 'socket.io-client'
import { createContext } from 'react'

export const socket = io.connect('http://127.0.0.1:3005')
export const SocketContext = createContext(null)