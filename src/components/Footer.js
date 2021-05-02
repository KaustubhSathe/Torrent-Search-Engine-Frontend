import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: '56px' }}>
            <Container>
                <span>
                    <strong style={{ color: 'white' }}>&copy; Torrent-Search-Engine</strong>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/about">About</Link>
                </span>
            </Container>
        </Navbar >
    );
}

export default Footer;