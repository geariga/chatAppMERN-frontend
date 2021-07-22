import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import '../styles/componentStyles/InitialModal.css'

export default function InitialModal(props) {
    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            displayName: form.elements.username_login.value,
            password: form.elements.password_login.value
        }
        const responseToken = await axios.post('/api/login', data)
        const currentToken = JSON.parse(localStorage.getItem('wat010203'))
        if (currentToken) {
            await axios.post('/api/revoke', {
                token: currentToken.token
            })
        }
        const tokenExpirationInMilliseconds = 259200000
        const tokenData = {
            token: responseToken.data.token,
            expiration: new Date().getTime() + tokenExpirationInMilliseconds
        }
        props.setShowModal(() => false)
        return localStorage.setItem('wat010203', JSON.stringify(tokenData))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            displayName: form.elements.username_register.value,
            password: form.elements.password_register.value
        }
        props.setShowModal(() => false)
        return await axios.post('/api/register', data)
    }

    const test = async () => {
        const token = localStorage.getItem('wat')
        if (token) {
            await axios.post('/api/test', {}, {
                headers: {
                    'Authorization': ''
                }
            })
        }
    }

    return (
        <Modal
            show={props.show}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    ChatApp
                </Modal.Title>
            </Modal.Header>
            <div className='modalSections'>
                <Modal.Body>
                    <Modal.Title>
                        Login
                    </Modal.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId='username_login'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' placeholder='Enter username' />
                        </Form.Group>
                        <Form.Group controlId='password_login'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>
                        <div className='centeredButton'>
                            <Button className='modalButton' type='submit'>Login</Button>
                            <Button onClick={test} className='modalButton'>Test</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Body>
                    <Modal.Title>
                        Register
                    </Modal.Title>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId='username_register'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' placeholder='Enter username' />
                        </Form.Group>
                        <Form.Group controlId='password_register'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>
                        <Form.Group controlId='re-enter-password'>
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control type='password' placeholder='Re-enter password' />
                        </Form.Group>
                        <div className='centeredButton'>
                            <Button className='modalButton' type='submit'>Register</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    )
}
