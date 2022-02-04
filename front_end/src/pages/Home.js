import React from 'react';
import Tool from '../components/Tool'
import AppHeader from '../components/Header'
import GridForItems from '../components/Grid'
import Menu from '../components/Menu'
import imgBg from '../2021-03_About-pg_2000x800.jpg';
const style ={
    bgd:{
        color: 'rgba(0,0,0,1)',
        backgroundImage: `url(${imgBg})`,
        backgroundSize: '100%,100%',
        padding:'20px'
    },
  }
  function Home() {
    return (
      <div>
        <div style={style.bgd}>
          <AppHeader/>
          <Tool/>
        </div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
          <GridForItems/>
        </div>
        <footer>
          <Menu/>
        </footer>
      </div>
    );
  }
  
  export default Home;