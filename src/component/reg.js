// Reg.js

import React, { useState } from 'react';
import { auth, firestore }  from '../services/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../styles/register.css';
import logo from '../Images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Reg() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Get the user ID
      const userId = userCredential.user.uid;

      await addDoc(collection(firestore, 'users'), {
        userId: userId,
        name: name,
        country: country,
      });

      console.log('User registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div className='reg'>
      <div className='head'>
        <img src={logo} className='img1' alt="Logo" />
        <h4 className='text'>GreenHarvest Quiz</h4>
      </div>
      <h5>Welcome!!!</h5>
      <p>Fill the registration form and enter to the world of Sustainability</p>
      <FloatingLabel controlId="floatingname" label="Name">
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </FloatingLabel>
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
      <Form.Select className='common' aria-label="Default select example" value={country} onChange={(e) => setCountry(e.target.value)}>
        <option>Select Country</option>
        <option value="Brazil">Brazil</option>
        <option value="Spain">Spain</option>
        <option value="US">US</option>
      </Form.Select>
      <button type="button" className="btn btn-success common" onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
}
