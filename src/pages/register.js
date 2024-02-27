import React from 'react';
import Reg from '../component/reg'
import farmer from '../Images/farmer.png' 
import '../styles/register.css'
import TopBar from '../component/TopBar.js';


export default function Register(){
    return (
        <>
        <TopBar/>
        <div className='box'>
            <img src={farmer} className='image'></img>
            <Reg/>
        </div>
      </>
    );
}