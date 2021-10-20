import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user, logOut}= useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="https://thumbs.dreamstime.com/b/creative-geometric-logo-eye-icon-eye-clinic-geometric-logo-eye-icon-eye-clinic-193801043.jpg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">

                        <NavLink to="/home" className="link-design" >
                            Home
                        </NavLink>
                        <NavLink to="/appointment" className="link-design"  >
                            Appointment
                        </NavLink>
                        <NavLink to="/patientinfo" className="link-design"  >
                            Patient's Info
                        </NavLink>
                        {
                            user.email?
                            <div className="logout-design">
                            <p className="name-design">Signed in as: {user.displayName}</p>
                            <button className="btn-regular" onClick={logOut}>Log Out</button>
                            </div>
                            :
                            <NavLink to="/login" className="link-design"  >
                            Log In
                        </NavLink>
                        }

                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;