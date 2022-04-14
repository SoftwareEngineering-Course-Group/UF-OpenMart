import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import { deleteItem } from '../utils';
import { useNavigate  } from "react-router-dom";

function ItemHeader(item:any) {
  const navi = useNavigate();
  
  const clickDeleteHandler =()=>{
    deleteItem(item.itemId)
      .then(() => {
        navi('/profile')
      }).catch((err: any) => {
          console.log("failed to delete")
      })

  }
  return (
    <div style={{margin:'15px',display:'flex'}}>
         <Header as='h2' style={{flex:1}}>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> {localStorage.getItem("email")}
        </Header>
        {
            item.profile?<Button primary style={{float:'right'}}  onClick={clickDeleteHandler }>Delete the item</Button>:null
        }
    </div>
      
  );
}

export default ItemHeader;