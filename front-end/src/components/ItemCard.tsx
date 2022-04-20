import React from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { getInfo } from '../utils';

const CardExampleCard = (props: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false)

  return (
  <>
          <Modal
              centered={false}
              open={open}
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
            navigate(`/item/${props.id}`,{replace : true,state : { id : props.id , userid:props.userid}})
            }).catch((err) => {
                setOpen(true);
                console.log("no login")
            })    
        }} style={{width:'100%'}}>
        <Image src={props.image} wrapped ui={false} />
          <Card.Content>
            
            <Card.Header>{props.name}</Card.Header>
            <Card.Header>{props.price}$</Card.Header>
          </Card.Content>
        </Card>
  </>
  
  );
}

export default CardExampleCard