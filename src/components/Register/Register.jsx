import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
     const {createUser } = useContext(AuthContext)
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password  =  form.password.value;
        form.reset('')
        setError('')
        if(password.length < 6){
            setError('Password must be 6 character');
            return;
        }
        createUser(email,password)
        .then(result =>{
            const loggedUSer = result.user
            console.log(loggedUSer);
        })
        .catch(error =>{
            setError(error.message)
        })
       
        

    }
    return (
        <div className='w-50 mt-4 mx-auto shadow-sm p-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>Already have an account <Link to='/login'>login</Link></p>
               
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className=" text-danger">
                        {error && error}
                </Form.Text>
            </Form>

            <div className='w-50 mx-auto'>
            <Button variant='outline-primary' className=' text-center border mt-4  rounded mx-auto'>
                <FaGoogle className=''></FaGoogle> Login with Google
            </Button>
            </div>
        </div>
    );
};

export default Register;