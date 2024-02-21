import React from 'react';
import Reg from '../component/reg'
import farmer from '../Images/farmer.png' 
import '../styles/register.css'


export default function Register(){
    return (
        <>
        <div className='box'>
            <img src={farmer} className='image'></img>
            <Reg/>
        </div>
      </>
    );
}