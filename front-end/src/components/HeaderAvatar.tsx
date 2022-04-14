import React from 'react'
import { Header, Image, Checkbox } from 'semantic-ui-react'
function HeaderAvatar() {
  return (
    <div style={{margin:'15px',display:'flex'}}>
         <Header as='h2' style={{flex:1}}>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> {localStorage.getItem("email")}
        </Header>
        <Checkbox toggle style={{float:'right'}} label="On Sale"/>
    </div>
      
  );
}

export default HeaderAvatar;