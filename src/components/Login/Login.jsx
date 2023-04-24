import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('')
    const {signUser} = useContext(AuthContext);

    const handleSignIn =(event) =>{
        event.preventDefault();
        setError('')
        const form = event.target
        const email = form.email.value;
        const password =  form.password.value;
        signUser(email,password)
        .then(result =>{
            const loggedUser = result.user
            setSuccess('Successfully logged in')
            console.log(loggedUser);
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (

        <Form onSubmit={handleSignIn} className='w-50 mt-4 mx-auto shadow-sm p-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <p>Don't have account <Link to='/register'>Register</Link></p>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br />
            <Form.Text>
                <span className='text-danger'>{error && error}</span>
                {success && <span className='text-primary'>{success}</span> }
            </Form.Text>
        </Form>

    );
};

export default Login;