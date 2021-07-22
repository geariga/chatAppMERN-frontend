import { useState } from 'react'
import axios from 'axios'

const getCurrentRoomsMessages = async (roomId) => {

}

export default function useMessages(initialValue = []) {
    const [messages, setMessages] = useState(initialValue)
    return [messages, setMessages]
}