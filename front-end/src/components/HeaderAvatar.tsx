import React from 'react'
import { Header, Image } from 'semantic-ui-react'
function HeaderAvatar() {
  return (
    <div style={{margin:'15px'}}>
         <Header as='h2'>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
        </Header>
    </div>
      
  );
}

export default HeaderAvatar;