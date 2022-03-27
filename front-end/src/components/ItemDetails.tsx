import React,{useState} from 'react'
import { Image,Card,Icon } from 'semantic-ui-react'
import Love from '../components/Love'

const ItemDetails = (item:any) => {
    return(
    <div>
        <Card style={{width:'100%'}}>
            <Image src={item.image} fluid />
            <Card.Content >
                <Love/>
                <Card.Header>{item.name}</Card.Header>
                <Card.Header>{item.price}$</Card.Header>
                <Card.Meta>
                    <span className='date'>posted in Feb 2022</span>
                </Card.Meta>
                <Card.Description>
                   can be used in chemistry lab.
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
)}

export default ItemDetails