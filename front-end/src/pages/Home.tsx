import  { useEffect, useState } from 'react';
import Tool from '../components/Tool'
import AppHeader from '../components/Header'
import GridForItems from '../components/Grid'
import Menu from '../components/Menu'
import imgBg from '../2021-03_About-pg_2000x800.jpg';//支持直接赋值相对路径
import MenuExamplePointing from '../components/Category';

const style ={
    bgd:{
        color: 'rgba(0,0,0,1)',
        backgroundImage: `url(${imgBg})`,
        backgroundSize: '100%,100%',
        padding:'20px'
    },
  }
  function Home() {
    const [filter, setfilter] = useState(0);
    const [category,setCategory] = useState("all");
    const [search,setTarget] = useState("") 
    const setFilte = (val: number) => {
      console.log("set filter: "+val)
      setfilter(val);
    };
    const setCate = (val: string) => {
      setCategory(val);
      setFilte(0)
    };
    const setSearch = (val: string) => {
      setTarget(val);
      setFilte(0)
    };
    useEffect(()=>{
      
      console.log(search)
    },[category,filter,search])
    return (
      <div>
        <div style={style.bgd}>
          <AppHeader/>
          <Tool setFilte = {setFilte}/>
        </div>
        <div style={{marginTop:'0px'}}>
          <MenuExamplePointing setCate={setCate} setTarget={setSearch}/>
        </div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
          {
            <GridForItems  pattern = {filter}  cate = {category} target = {search}/>
          }
        </div>
          <Menu/>
      </div>
    );
  }
  
  export default Home;