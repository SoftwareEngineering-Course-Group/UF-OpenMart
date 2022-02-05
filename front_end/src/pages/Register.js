
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import img from '../albert-alberta-uf-mascots-cropped-1000x610-1.jpeg';
import Register from '../components/Register'
const RegisterPage = () => {
    
      
      return (
        <>
        <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src={img} size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>Welcome</h2>
        </div>
        <Register/>
        </>        
      )
  }
   
  export default RegisterPage;