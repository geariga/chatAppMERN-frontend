import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavMenu(props) {
    return (
        <NavDropdown
            flip="true"
            title={<i className="fas fa-bars fa-2x"></i>} 
            className="noCaret" 
            id="basic-nav-dropdown"
        >
            {props.children}
        </NavDropdown>
    )
}