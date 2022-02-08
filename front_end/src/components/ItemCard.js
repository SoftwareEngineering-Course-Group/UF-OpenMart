import React from 'react'
import { Card, Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CardExampleCard = (props) => (
  <Link to="/item">
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Icon name='heart outline' size='large' color='red' link style={{float:'right'}}/>
        <Card.Header>{props.name}</Card.Header>
        <Card.Header>{props.price}$</Card.Header>
      </Card.Content>
    </Card>
  </Link>
  
)

export default CardExampleCard