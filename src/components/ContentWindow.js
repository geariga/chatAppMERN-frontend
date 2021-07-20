import React from 'react'
import '../styles/componentStyles/ContentWindow.css'

export default function ContentWindow(props) {
    return (
        <div className="contentWindow">
            {props.children}
        </div>
    )
}