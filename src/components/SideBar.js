import React from 'react'
import '../styles/componentStyles/SideBar.css'

export default function SideBar(props) {
    return (
        <div className="sideBar">
            {props.children}
        </div>
    )
}