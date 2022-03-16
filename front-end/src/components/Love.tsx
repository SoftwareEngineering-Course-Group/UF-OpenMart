import React,{useState} from 'react'
import {Icon } from 'semantic-ui-react'


const Love = () => {
    const [love, setlove] = useState(false);
    const handleClick=() =>{
        setlove(!love);
    }
    var loveIcon:any;
    if(love){
        loveIcon=(<Icon name='heart' size='large' color='red' link style={{float:'right'}}/>);
    }else{
        loveIcon=(<Icon name='heart outline' size='large' color='red' link style={{float:'right'}}/>);
    }
    return(    
        <div onClick={() => handleClick()}>{loveIcon}</div>
                
)}

export default Love