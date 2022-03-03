import React from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';
import { Link,useNavigate } from 'react-router-dom';


function ProfileImage(props:any) {
  const navigate = useNavigate();
  // console.log(props.identifier);
  return (

    <div style={{width:'24%',position: 'relative',paddingBottom: '25%',margin:'0% 1% 1% 0%',cursor: 'pointer'}} onClick = {()=>{
        navigate('/item',{replace : true,state : { id : props.identifier }})
        }}>
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