import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Topmenu() {
    return (
        <Navbar bg="primary" variant="dark">
            <Link to="/">
                <Navbar.Brand>
                    GitHub Jobs
                </Navbar.Brand>
            </Link>

            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}