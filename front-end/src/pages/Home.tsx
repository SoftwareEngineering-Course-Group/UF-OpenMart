import React, { useEffect, useState } from 'react';
import Tool from '../components/Tool'
import AppHeader from '../components/Header'
import GridForItems from '../components/Grid'
import Menu from '../components/Menu'
import imgBg from '../2021-03_About-pg_2000x800.jpg';//支持直接赋值相对路径
import { getRandom } from '../utils';
import MenuExamplePointing from '../components/Category';
// const items = [
//   {
//     id:1,
//     name: 'goggle',
//     image:'../images/2cc3723492e356375e6e26cacc12407.jpg',//不支持直接赋值相对路径
//     price: 3
//   },
// ]

const random = [true]
const style ={
    bgd:{
        color: 'rgba(0,0,0,1)',
        backgroundImage: `url(${imgBg})`,
        backgroundSize: '100%,100%',
        padding:'20px'
    },
  }
  function Home() {
    const [filter, setfilter] = useState(3);
    const [category,setCategory] = useState("home");
    const setFilte = (val: number) => {
      setfilter(val);
    };
    const setCate = (val: string) => {
      setCategory(val);
    };
    useEffect(()=>{
      // console.log(category)
    })
    return (
      <div>
        <div style={style.bgd}>
          <AppHeader/>
          <Tool setFilte = {setFilte}/>
        </div>
        <div style={{marginTop:'0px'}}>
          <MenuExamplePointing setCate = {setCategory}/>
        </div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
          {
            <GridForItems  pattern = {filter}  cate = {category}/>
          }
        </div>
        <footer>
          <Menu/>
        </footer>
      </div>
    );
  }
  
  export default Home;