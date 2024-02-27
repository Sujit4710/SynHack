import React, { useState } from 'react';
import logo from '../Images/logo.png';
import '../styles/register.css';
import farmer from '../Images/login.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import TopBar from '../component/TopBar';

export default function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Sign in user using Firebase
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful!');
            navigate('/stage')
            // Redirect or perform other actions after successful login
        } catch (error) {
            console.error('Login error:', error.message);
            // Handle login error (display a message, etc.)
        }
    };

    return (
        <>
        <TopBar/>
        <div className='container'>
            
            <div className='box'>
                <img src={farmer} className='image' alt="Farmer"></img>
                <div className='reg'>
                    <div className='head'>
                        <img src={logo} className='image' alt="Logo" />
                        <h3 className='text'>GreenHarvest Quiz</h3>
                    </div>
                    <h4>Welcome!!!</h4>
                    <p>Sign in to enter the world of Sustainability</p>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 common"
                    >
                        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FloatingLabel>

                    <button type="button" className="btn btn-success common" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
        </>
        
    );
}
