import React from 'react'
import { Image,Icon,List,Button,Grid, Item } from 'semantic-ui-react'
import Menu from '../components/Menu'
import ProfileImage from '../components/ProfileImage'
import img from '../albert-alberta-uf-mascots-cropped-1000x610-1.jpeg';

const user = 
    {
      id:1,
      name: 'yyb',
      avatar:'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      rtime: 'Feb.7th 2022',
      aboutMe:'A goat was feeding one day high on a rocky crag when a hungry wolf happened to pass below'
    }

const favorites = [
    {
        id:1,
        name: 'goggle',
        image:'../images/2cc3723492e356375e6e26cacc12407.jpg',
        price: 3
    },
    {
        id:2,
        name: 'straight plate clip',
        image:'../images/4ff4c153d4a5841bb5cab1a5e8ecfc0.jpg',
        price: 5
    },
    {
        id:3,
        name: 'razor',
        image:'../images/36aaf8b43944fc5b767ede93c7c5696.jpg',
        price: 8
    },
    {
        id:4,
        name: 'humidifier',
        image:'../images/51c8a5a56b2538f409b2efaf9f0fffe.png',
        price: 15
    },
    {
        id:5,
        name: 'humidifier',
        image:'../images/51c8a5a56b2538f409b2efaf9f0fffe.png',
        price: 15
    },
]
const posteds = [
    {
        id:6,
        name: 'goggle',
        image:'../images/2cc3723492e356375e6e26cacc12407.jpg',
        price: 3
    },
    {
        id:7,
        name: 'straight plate clip',
        image:'../images/4ff4c153d4a5841bb5cab1a5e8ecfc0.jpg',
        price: 5
    },
    ]
const ImageExampleCircular = () => (
    <div><div/>
    <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>yyb</h2>
    </div>
    <div style={{textAlign:'center', margin:'2% 12% 0% 12%'}}>
        <div>
            <Icon name='time' />
            <span>registration time: {user.rtime}</span>
        </div>
        <div>
            <span>{user.aboutMe} </span>
            <Icon name='edit outline' link/>
        </div>     
                
    </div>
        <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'center', marginTop:'5%'}}>
            <Button primary>Message</Button>
        </div>
        <div style={{display:'flex',margin:'3%'}}>
            <h2>Posted</h2>
        </div>
        <div  style={{display:'flex',flexWrap:'wrap',margin:'2% 1% 2% 2%'}}>
            {
                 posteds.map((posted)=>(<ProfileImage image={posted.image} identifier = {posted.id} key={posted.id}/>))
            }
        </div>

        <div style={{display:'flex',margin:'3%'}}>
            <h2>Favorites</h2>
        </div>
        <div  style={{display:'flex',flexWrap:'wrap',margin:'2% 1% 2% 2%',paddingBottom:'70px'}}>
            {    
                 favorites.map((favorite)=>(<ProfileImage image={favorite.image} identifier = {favorite.id} key={favorite.id}/>))
            }
        </div>
        <footer>
          <Menu/>
        </footer>
    </div>
)

export default ImageExampleCircular