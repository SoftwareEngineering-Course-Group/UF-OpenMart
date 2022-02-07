import React from 'react';
import HeaderAvatar from '../components/HeaderAvatar'
import Menu from '../components/Menu'
import AddDetails from '../components/AddDetails'
import imgBg from '../2021-03_About-pg_2000x800.jpg';

  function Add() {
    return (
      <div>
        <div>
          <HeaderAvatar/>
        </div>
        <div style={{margin:'5px',paddingBottom:'70px'}}>
          <AddDetails/>
        </div>
        <footer>
          <Menu/>
        </footer>
      </div>
    );
  }
  
  export default Add;