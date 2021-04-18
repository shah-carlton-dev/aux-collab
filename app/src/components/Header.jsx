import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <Navbar sticky="top" className="navbar gradient">
			<Nav className="ml-auto nav-text">
				<Nav.Link as={Link} to="/"> Link</Nav.Link>
			</Nav>
		</Navbar>
    )
}

export default Header;