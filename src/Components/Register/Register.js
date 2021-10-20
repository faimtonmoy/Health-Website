import React, {  useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { signInUsingGoogle, signUpUsingEmail,  updateUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName]= useState('');
    const [error, setError]= useState('');
    const history = useHistory();
    const location= useLocation();
    const redirectUrl = location.state?.from || '/home';
    console.log(redirectUrl);
    const handleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl);
            })
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmailRegister=e=>{
        e.preventDefault();
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password))
        {
            setError('Password must be 6 character long, contain at least one letter and one number');
            return;
        }
        signUpUsingEmail(email, password)
        .then( (result)=>{
            history.push(redirectUrl);
            setError('');
             updateUser(name);
           
            
            
        })
        .catch(error =>{
            setError(error.message);
        })
       

        
    }
   
   
    return (
        <div>
            <Container>
                <Form onSubmit={handleEmailRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control onBlur={handleName} type="name" placeholder="Enter Name" />
                    </Form.Group>

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
                <p>Already have an Account? <Link  to="/register">Log In Here</Link> </p>
        
            </Container>

        </div>
    );
};

export default Register;