import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import InitialModal from './components/InitialModal'
import SideBar from './components/SideBar'
import SideBarNav from './components/SideBarNav'
import ChatRoomsList from './components/ChatRoomsList'
import ContentWindow from './components/ContentWindow'
import ContentWindowNav from './components/ContentWindowNav'
import ChatWindow from './components/ChatWindow'

export default function App() {
    const [showModal, setShowModal] = useState(false)

    const checkIfSavedTokenIsValid = () => {
        const token = localStorage.getItem('wat010203')
        if (token == null) {
            setShowModal(() => true)
            return false
        } else {
            const tokenObject = JSON.parse(token)
            const currentTime = new Date().getTime()
            if (tokenObject.expiration <= currentTime) {
                setShowModal(() => true)
                return false
            } else {
                return tokenObject
            }
        }
    }

    useEffect(() => {
        console.log(checkIfSavedTokenIsValid())
    }, [])

    return <>
        <InitialModal 
            show={showModal} 
            setShowModal={setShowModal} 
        />
        <SideBar>
            <SideBarNav />
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <i className="fas fa-search fa-1x"></i>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Search or start a new chat"
                    aria-label="Search or start a new chat"
                    aria-describedby="search-input"
                />
            </InputGroup>
            <ChatRoomsList />
        </SideBar>

        <ContentWindow>
            <ContentWindowNav />
            <ChatWindow />
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <i className="fas fa-paperclip fa-1x"></i>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <i className="fas fa-paper-plane fa-1x"></i>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Type a message"
                    aria-label="Type a message"
                    aria-describedby="search-input"
                />
            </InputGroup>
        </ContentWindow>
    </>
}