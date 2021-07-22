import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function ChatRoomSearch() {
    return (
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
    )
}