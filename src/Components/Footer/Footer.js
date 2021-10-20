import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer-design" >
            <Row>
                <Col xs={12} md={4}>
                    <h3>Eye Care Hospital</h3>
                    <p>Everything at one place</p>
                </Col>
                <Col xs={12} md={4}>
                    <p>Our Branches:</p>
                    <p>Dhaka</p>
                    <p>Chottogram</p>
                    <p>Rajshahi</p>
                    <p>Khulna</p>
                </Col>
                <Col xs={12} md={4}>
                    <h5>Contact Us:</h5>
                    <p>eyecare@gmail.com</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;