import React,{useState,useLayoutEffect,useEffect} from 'react'
import { Image,Icon,List,Button,Grid, Modal } from 'semantic-ui-react'
import Menu from '../components/Menu'
import ProfileImage from '../components/ProfileImage'
import { getInfo, getItembyId, getPost } from '../utils';
import img from '../albert-alberta-uf-mascots-cropped-1000x610-1.jpeg';
import { Route, Routes, useNavigate } from 'react-router';
import Item from './Item';

const SERVER_ORIGIN = "http://localhost:12345";
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


const ImageExampleCircular = () => {
    const [open, setOpen] = React.useState(true)
    
    const getPosted = () => {

    } 

    const getFavorite=() =>{

    }
    const navigate = useNavigate();
    const showError = () =>{

    }
    const [posted,setPosted] = useState([{
        ID : -1,
        Catagory: "",  
        Name: "",  
        Description: "",  
        Price: 0, 
        CreatedAt: null,  
        Status:   "",
        Image: ""
    }])
    const [items,setItems] = useState([{
        Files:[""],
        Catagory: "",  
        Name: "",  
        Description: "",  
        Price: 0, 
        CreatedAt: null,  
        Status:   "",
    }])
    const [curr,setCurr] = useState ([{
        ID : -1,
        Catagory: "",  
        Name: "",  
        Description: "",  
        Price: 0, 
        CreatedAt: null,  
        Status:   "",
        Image: ""
    }])
  useEffect(() => {
        // localStorage.setItem("jwtToken",'');
        // localStorage.setItem("myId",'');
        if(localStorage.getItem("jwtToken")==='' || localStorage.getItem("jwtToken")===null){
            setOpen(true);
        }
        else{
            getInfo().then(()=> {
                setOpen(false);  
            }).catch((err) => {
                setOpen(true);
                console.log("no login")
            })    
            setOpen(false);       
        }
        let curr = posted
        getPost().then(async response => {
            // setCurr(response)
            for(var j = 0; j < 3; j++) {
                let data = await getItembyId(response[j].ID).then((res: any) =>{
                    response[j].Image = SERVER_ORIGIN+res.Files[0];
                    console.log(response[j].Image);
                    return response
                }).catch((err) => {
                    console.log(err)
                    console.log("err in getItems")
                })       
            }
            console.log(response[0].Image)
            setPosted(response)   
        }).catch((err) => {
            console.log("err in get list")
        })    
        console.log(curr)
    },[]
    )
    
    console.log(posted)
    
    return(
        
        <div>
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
        <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
            
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular centered/>
            <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>{localStorage.getItem("email")}</h2>
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
                    posted.map((post)=>(<ProfileImage image={post.Image} identifier = {post.ID} key={post.ID}/>))
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
    // }
}

export default ImageExampleCircular
