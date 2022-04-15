import React, { useEffect } from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import { deleteItem, getName } from '../utils';
import { useNavigate  } from "react-router-dom";

function ItemHeader(item:any) {
  const navi = useNavigate();
  const [email, setEmail] = React.useState("")
  const clickDeleteHandler =()=>{
    deleteItem(item.itemId)
      .then(() => {
        navi('/profile')
      }).catch((err: any) => {
          console.log("failed to delete")
      })

  }

  useEffect(()=>{
    console.log(item.userId)
    getName((String)(item.userId)).then((responce:any)=>{
      setEmail(responce.email)
      console.log(email)
    }).catch((err) => {
        console.log(err)
        console.log("err in email")
    }) 
  },[])
  return (
    <div style={{margin:'15px',display:'flex'}}>
         <Header as='h2' style={{flex:1}}>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> {email}
        </Header>
        {
            item.profile?<Button primary style={{float:'right'}}  onClick={clickDeleteHandler }>Delete the item</Button>:null
        }
    </div>
      
  );
}

export default ItemHeader;