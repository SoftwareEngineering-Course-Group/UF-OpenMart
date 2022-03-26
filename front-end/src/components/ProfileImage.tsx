import React from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';
import { Link,Route,Routes,useNavigate } from 'react-router-dom';
import Item from '../pages/Item';


function ProfileImage(props:any) {
  const navigate = useNavigate();
  return (
    <div id={props.tabkey} style={{width:'24%',position: 'relative',paddingBottom: '25%',margin:'0% 1% 1% 0%',cursor: 'pointer'}} 
    onClick = {()=>{
      // console.log(props.identifier)  

       navigate(`/item/${props.identifier}`,{replace : true,state : { id : props.identifier }})
    }}
    >
        <div style={{ 
        background: `url(${props.image}) 100% 100% no-repeat`,
        backgroundSize:'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        }}>
        {
          props.delete===true ?(<><Icon name='delete' circular link inverted onClick={()=>props.click(props.tabkey)}/></>):null
        }
        </div>
    </div>
  );
}

export default ProfileImage;