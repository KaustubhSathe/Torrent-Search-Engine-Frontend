import React from "react";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{
            width: '100%',
            height: '56px', backgroundColor: 'rgb(53,58,64)', display: 'flex', alignItems: 'center',
            marginTop: 'auto'
        }}>
            <Container>
                <span>
                    <strong style={{ color: 'white' }}>&copy; torrentic</strong>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/about">About</Link>
                </span>
            </Container>
        </footer >
    );
}

export default Footer;