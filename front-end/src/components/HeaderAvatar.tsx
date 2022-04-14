import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import { deleteItem } from '../utils';
function HeaderAvatar(item:any) {

  const onFinish = (data: any) => {
    console.log(data);
    
  }
  return (
    <div style={{margin:'15px',display:'flex'}}>
         <Header as='h2' >
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> {localStorage.getItem("email")}
        </Header>
    </div>
      
  );
}

export default HeaderAvatar;