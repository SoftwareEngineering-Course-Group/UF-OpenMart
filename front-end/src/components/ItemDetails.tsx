import { Image,Card } from 'semantic-ui-react'
import Love from '../components/Love'

const ItemDetails = (item:any) => {
    return(
    <div>
        <Card style={{width:'100%'}}>
            <Image src={item.image} fluid />
            <Card.Content >
                <Love className = "123" itemId={item.id}/>
                <Card.Header>{item.name}</Card.Header>
                <Card.Header>{item.price}$</Card.Header>
                <Card.Meta>
                    <span className='date'>{item.createdAt}</span>
                </Card.Meta>
                <Card.Description>
                   {item.description}
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
)}

export default ItemDetails