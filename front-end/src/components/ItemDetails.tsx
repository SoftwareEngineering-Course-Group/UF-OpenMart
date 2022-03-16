import React,{useState} from 'react'
import { Image,Card,Icon } from 'semantic-ui-react'

const item = 
    {
      id:1,
      name: 'goggle',
      image:'../images/2cc3723492e356375e6e26cacc12407.jpg',
      price: 3
    }


const ItemDetails = () => {
    const [love, setlove] = useState(false);
    const handleClick=() =>{
        setlove(!love);
    }
    var loveIcon:any;
    if(love){
        loveIcon=(<Icon name='heart' size='large' color='red' link style={{float:'right'}}/>);
    }else{
        loveIcon=(<Icon name='heart outline' size='large' color='red' link style={{float:'right'}}/>);
    }
    return(
    <div>
        <Card style={{width:'100%'}}>
            <Image src={item.image} fluid />
            <Card.Content >
                <div onClick={() => handleClick()}>{loveIcon}</div>
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