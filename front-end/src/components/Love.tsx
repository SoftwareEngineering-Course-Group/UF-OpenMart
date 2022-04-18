import React,{useState,useEffect} from 'react'
import {Icon } from 'semantic-ui-react'


const Love = (item:any) => {
    const [love, setlove] = useState(false);
    var itemId=item.itemId;
    useEffect(()=>{
       let loves=localStorage.getItem('myLove');
       console.log(loves);
       if(loves!=null&&JSON.parse(loves).includes(item.itemId)){
            setlove(true);
       }

      },[love])
    const handleClick=() =>{
        setlove(!love);
        var temp=localStorage.getItem('myLove');
        if(temp==null){
            localStorage.setItem("myLove",JSON.stringify([item.id]))
        }else{
            console.log(JSON.parse(temp))
            var loves=JSON.parse(temp);
            const _key = loves.some((item: any) => item == itemId);
            console.log(_key);
            if (_key) {
                localStorage.setItem("myLove",JSON.stringify(loves.filter((item:any) => item != itemId)));
            } else {
                localStorage.setItem("myLove",JSON.stringify([...loves, item.itemId]))
            }
            console.log(localStorage.getItem('myLove'));

        }
        //if (!Array.isArray(localStorage.getItem('myLove'))){
        
        
        
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