import React from 'react';
import Tool from '../components/Tool'
import AppHeader from '../components/Header'
import GridForItems from '../components/Grid'
import Menu from '../components/Menu'
import imgBg from '../2021-03_About-pg_2000x800.jpg';
const items = [
  {
    id:1,
    name: 'goggle',
    image:'../images/2cc3723492e356375e6e26cacc12407.jpg',
    price: 3
  },
  {
    id:2,
    name: 'straight plate clip',
    image:'../images/4ff4c153d4a5841bb5cab1a5e8ecfc0.jpg',
    price: 5
  },
  {
    id:3,
    name: 'razor',
    image:'../images/36aaf8b43944fc5b767ede93c7c5696.jpg',
    price: 8
  },
  {
    id:4,
    name: 'humidifier',
    image:'../images/51c8a5a56b2538f409b2efaf9f0fffe.png',
    price: 15
  },
]
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
          {
            GridForItems(items,false)
          }
        </div>
        <footer>
          <Menu/>
        </footer>
      </div>
    );
  }
  
  export default Home;