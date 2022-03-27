import React, { useEffect, useState } from 'react'
import { Card, Image,Icon, Modal, Button } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';
import Love from '../components/Love'
import { getInfo } from '../utils';

const CardExampleCard = (props: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false)
  const [item, setItem] = useState(props)
  useEffect(()=>{
    console.log(item)
  },[])
  return (
  <>
          <Modal
              centered={false}
              open={open}
              // onClose={() => setOpen(false)}
              // onOpen={() => setOpen(true)}
              // trigger={<Button>Show Modal</Button>}
          >
          <Modal.Header>Failed to access</Modal.Header>
          <Modal.Content>
              <Modal.Description>
              Please login first...
              </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
              <Button onClick={() => navigate("/login")}>Back to Login</Button>
          </Modal.Actions>
          </Modal>
        <Card onClick = {()=>{
           getInfo().then(()=> {
            setOpen(false); 
            navigate(`/item/${props.id}`,{replace : true,state : { id : props.id }})
            }).catch((err) => {
                setOpen(true);
                console.log("no login")
            })    
        }}>
        <Image src={props.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Header>{props.price}$</Card.Header>
          </Card.Content>
        </Card>
  </>
  // navigate(`/item/${props.ID}`,{replace : true,state : { id : props.identifier }})
  
  );
}

export default CardExampleCard