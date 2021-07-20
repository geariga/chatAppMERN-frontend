import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Avatar from './Avatar'
import NavMenu from './NavMenu'
import '../styles/componentStyles/AllNavbars.css'

export default function ContentWindowNav() {
    return (
        <Navbar bg="secondary">
            <Navbar.Brand href="#">
                <Avatar />
            </Navbar.Brand>
            <div className="navbarButtons">
                <i className="fas fa-search fa-2x"></i>
                <NavMenu>
                    <NavDropdown.Item href="#/action-1">
                        <div>
                            <i className="fas fa-info fa-1x"></i>
                        </div>
                        Room Info
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#/action-2">
                        <div>
                            <i className="fas fa-eraser fa-1x"></i>
                        </div>
                        Clear Messages
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#/action-3">
                        <div>
                            <i className="fas fa-door-closed"></i>
                        </div>
                        Exit room
                    </NavDropdown.Item>
                </NavMenu>
            </div>
        </Navbar>
    )
}
