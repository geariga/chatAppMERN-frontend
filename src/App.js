import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from './contexts/user'
import { socket, SocketContext } from './contexts/socket'
import InitialModal from './components/InitialModal'
import SideBar from './components/SideBar'
import SideBarNav from './components/SideBarNav'
import ChatRoomsList from './components/ChatRoomsList'
import ContentWindow from './components/ContentWindow'
import ContentWindowNav from './components/ContentWindowNav'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import ChatRoomSearch from './components/ChatRoomSearch'

export default function App() {
    const [showModal, setShowModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const getUserIfTokenIsValid = async () => {
        const token = localStorage.getItem('wat010203')
        if (token === null || token === 'null') {
            console.log('no token')
            setShowModal(() => true)
            return null
        } else {
            const tokenObject = JSON.parse(token)
            const currentTime = new Date().getTime()
            if (tokenObject.expiration <= currentTime) {
                console.log('expired token')
                localStorage.setItem('wat010203', null)
                setShowModal(() => true)
                return null
            } else {
                console.log('token is valid')
                const response = await axios.post('/api/getuser', {}, {
                    headers: {
                        'Authorization': `Bearer ${tokenObject.token}`
                    }
                })
                return response.data
            }
        }
    }

    useEffect(() => {
        (async function () {
            const user = await getUserIfTokenIsValid()
            if (user) {
                setCurrentUser(user)
                return user
            }
        })()
    }, [])

    return <>
        <InitialModal
            show={showModal}
            onHide={() => setShowModal(false)}
            setShowModal={setShowModal}
        />
        <SocketContext.Provider value={socket}>
            <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                <SideBar>
                    <SideBarNav />
                    <ChatRoomSearch />
                    <ChatRoomsList />
                </SideBar>
                <ContentWindow>
                    <ContentWindowNav />
                    <ChatWindow
                        socket={socket}
                        // messages={messages}
                        user={currentUser}
                    />
                    <MessageInput />
                </ContentWindow>
            </UserContext.Provider>
        </SocketContext.Provider>
    </>
}