import React,{useState,useEffect} from 'react'
import {Icon } from 'semantic-ui-react'


const Love = (item:any) => {
    const [love, setlove] = useState(false);
    useEffect(()=>{
       var loves=localStorage.getItem('myLove');
       console.log(loves);
       if(loves!=null&&mylove.includes(item.itemId)){
            var mylove=JSON.parse(loves);
            setlove(true);
       }

      },[])
    const handleClick=() =>{
        setlove(!love);
        var loves=localStorage.getItem('myLove');
        if (!Array.isArray(loves)) return;
        const _key = loves.some((item) => item == item.itemId);
        console.log(_key);
        if (_key) {
            localStorage.setItem("myLove",JSON.stringify(loves.filter((item) => item != item.itemId)));
        } else {
            localStorage.setItem("myLove",JSON.stringify([...loves, item.itemId]))
        }
        console.log(localStorage.getItem('myLove'));
        
    }
    var loveIcon:any;
    if(love){
        loveIcon=(<Icon name='heart' size='large' color='red' link style={{float:'right'}}/>);
    }else{
        loveIcon=(<Icon name='heart outline' size='large' color='red' link style={{float:'right'}}/>);
    }
    return(    
        <div onClick={handleClick}>{loveIcon}</div>
                
)}

export default Love