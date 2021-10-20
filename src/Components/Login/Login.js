import React, {useState, useEffect}from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
   const {signInUsingGoogle, signInUsingEmail}= useAuth();
   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('');
   const [error, setError]= useState('');
   const history= useHistory();
   const location= useLocation();
   const redirectUrl= location.state?.from || '/home';
   const handleLogIn=()=>{
       signInUsingGoogle()
       .then(result=>{
            history.push(redirectUrl);
       })
   }
   const handleEmail= e =>{
       setEmail(e.target.value);
   }
   const handlePassword= e =>{
    setPassword(e.target.value);
}
  const handleEmailLogin= e=>{
    e.preventDefault();
     signInUsingEmail(email, password)
     .then(result=>{
         history.push(redirectUrl);
         setError('');
     })
     .catch(error=>{
         setError(error.message);
     })
    
        
  }
 
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Form onSubmit={handleEmailLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="row mb-3 text-danger">{error}</div>
                    <Button  type="submit">
                        Submit
                    </Button>
                </Form>
                <div>---------OR---------</div>
                <button className="btn-regular" onClick={handleLogIn}>Google Sign In</button>
                <p>New User? <Link  to="/register">Register Here</Link> </p>
        
            </Container>
        </div>
    );
};

export default Login;