import React, { useContext } from 'react';
import heade from '../../images/header.png'
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/icons/logo.png'
import './Header.css'
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            console.log('logout Success');
        })
        .catch(error=>{
            console.error(error.message);
        })
        
    }
    console.log(user);
    return (
        <div className='header' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${heade})` }}>
            

            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className='log img-fluid' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                           <Link className='text-decoration-none text-white me-3'  to='/'>Home</Link>
                           <Link className='text-decoration-none text-white me-3' to='/login'>Login</Link>
                           <Link className='text-decoration-none text-white' to='/book'>Book</Link>
                           {user && <span className='text-white ms-2'>Welcome {user.email}
                           <Button onClick={handleLogOut} variant='outline-primary' className='ms-2'>Log out</Button>
                           </span> }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="title-container text-center text-white">
                <h1 className=''>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>


        </div>
    );
};

export default Header;