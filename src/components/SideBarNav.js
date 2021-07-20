import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Avatar from './Avatar'
import NavMenu from './NavMenu'
import '../styles/componentStyles/AllNavbars.css'

export default function SideBarNav() {
    return (
        <Navbar bg="secondary">
            <Navbar.Brand href="#">
                <Avatar />
            </Navbar.Brand>
            <div className="navbarButtons">
                <i className="fas fa-comment-dots fa-2x"></i>
                <NavMenu>
                    <NavDropdown.Item href="#">
                        <div>
                        <i className="fas fa-comments"></i>
                        </div>
                        New Chatroom
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <div>
                            <i className="fas fa-archive fa-1x"></i>
                        </div>
                        Archived Rooms
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <div>
                            <i className="fas fa-user-circle fa-1x"></i>
                        </div>
                        View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <div>
                            <i className="fas fa-sign-out-alt fa-1x"></i>
                        </div>
                        Sign Out
                    </NavDropdown.Item>
                </NavMenu>
            </div>
        </Navbar>
    )
}
