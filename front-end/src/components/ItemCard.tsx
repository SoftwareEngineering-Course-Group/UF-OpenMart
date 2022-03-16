import React from 'react'
import { Card, Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Love from '../components/Love'
const CardExampleCard = (props: any) => (
  <Link to="/item">
  <Card>
    <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Header>{props.price}$</Card.Header>
      </Card.Content>
    </Card>
  </Link>
    
  
)

export default CardExampleCard