import React from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';


function ProfileImage(props) {
  return (
    <div style={{width:'24%',position: 'relative',paddingBottom: '25%',margin:'0% 1% 1% 0%'}}>
        <div style={{ 
        background: `url(${props.image}) 100% 100% no-repeat`,
        backgroundSize:'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        }}>
        </div>
    </div>
      
  );
}

export default ProfileImage;