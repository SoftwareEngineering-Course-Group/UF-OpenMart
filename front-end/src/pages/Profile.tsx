import React,{useState,useLayoutEffect,useEffect} from 'react'
import { Image,Icon,List,Button,Grid, Modal, Checkbox, Message } from 'semantic-ui-react'
import Menu from '../components/Menu'
import ProfileImage from '../components/ProfileImage'
import { getInfo, getItembyId, getPost } from '../utils';
import img from '../albert-alberta-uf-mascots-cropped-1000x610-1.jpeg';
import { Route, Routes, useNavigate } from 'react-router';
import avator from '../avator.png'

const SERVER_ORIGIN = "http://localhost:12345";
const user = 
    {
      aboutMe:'Welcome to come my profile!'
    }

const ImageExampleCircular = () => {
    const [open, setOpen] = React.useState(true)
    const navigate = useNavigate();
    const [favorites,setF] = useState([{
        ID : -1,
        Catagory: "",  
        Name: "",  
        Description: "",  
        Price: 0, 
        CreatedAt: null,  
        Status:   "",
        Image: ""
    }])
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

    const logout = (()=>{
        console.log("status: "+localStorage.getItem("logStatus"))
        localStorage.setItem("logStatus","false")
        localStorage.setItem("jwtToken",'')
        navigate("/login")
    })

  useEffect(() => {
        // localStorage.setItem("jwtToken",'');
        let myid = localStorage.getItem("myId")
        if(localStorage.getItem("jwtToken")==='' || localStorage.getItem("jwtToken")===null){
            setOpen(true);
        }
        else{
            getInfo().then(()=> {
                localStorage.setItem("logStatus","true")
                setOpen(false);  
            }).catch((err) => {
                localStorage.setItem("logStatus","false")
                setOpen(true);
                console.log("no login")
            })    
            setOpen(false);       
        }
        let userPosts: any[] = []
        getPost().then(async response => {
            console.log(response)
            for(var j = 0; j < response.length; j++) {
                    await getItembyId(response[j].ID).then((res: any) =>{
                    response[j].Image = SERVER_ORIGIN+res.Files[0];
                    // console.log(response[j].Image);
                    if(String(response[j].UserID)===String(myid) ){
                        userPosts.push(response[j])
                    }
                    // return response
                }).catch((err) => {
                    console.log(err)
                    console.log("err in getItems")
                })         
            }
            console.log(userPosts[0].Image)
            setPosted(userPosts)   
        }).catch((err) => {
            setPosted(userPosts)
            console.log("err in get list "+err )
        })
        let favorites : any[]=[]
        var temp=localStorage.getItem('myLove');
        if(temp!=null){
            var loves=JSON.parse(temp);
            console.log(loves)
            for(var j = 0; j < loves.length; j++) {
                if(loves[j]!=null){
                    let index=loves[j]
                    getItembyId(index).then((res: any) =>{
                        res.Image = SERVER_ORIGIN+res.Files[0];
                        // console.log(response[j].Image);
                        res.ID=Number(index);
                        console.log(res);
                        favorites.push(res)
                        
                        // return response
                    }).catch((err) => {
                        console.log(err)
                        console.log("err in getItemsF")
                    })      
                }
                
            }
        }
        setF(favorites)
        console.log(favorites)
    },[]
    )
    // console.log(posted)
    
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
        
        <div style={{display:'flex', justifyContent: 'center',alignSelf:"center,flexEnd,flexEnd", marginTop: '1%'}}>
            <div style={{flexBasis: "100",paddingLeft:"120px",margin:"auto"}}>  
                <Image src={avator} size='small' circular centered/>
            </div>  
            
            <div style={{flexBasis: "1"}}>
                <h3 style={{textAlign:'center',marginRight:'0px'}}>logout</h3>
                <Icon.Group size='large'>
                    <Icon size='large' color='red' name='dont' />
                    <Icon size='small' color = 'black' name='user'/>
                </Icon.Group>
                    <Checkbox toggle onClick={()=>logout()} checked={localStorage.getItem("logStatus")==="true"}/>
                    
                <Icon.Group size='large' >
                    <Icon loading size='large' name='circle notch' />
                    <Icon size='small' name='user' />
                </Icon.Group>
            </div>
                </div>
            <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>{localStorage.getItem("name")}</h2>
        
        <div style={{textAlign:'center', margin:'2% 12% 0% 12%'}}>
            <div>
                <Icon name='time' />
                <span>email: {localStorage.getItem("email")}</span>
            </div>
            <div>
                <span>{user.aboutMe} </span>
                <Icon name='edit outline' link/>
            </div>     
            
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
            {
                favorites.length===0 ?(
                <div style = {{display:'flex', justifyContent: 'center', marginTop:'2%'}}>
                    <Message
                    style={{width:'50%', textAlign:'center'}}
                    success
                    header={'no items in this category'}
                    // content={'no items in this category'} 
                    color= {'green'}
                    />
                </div>
                ):(
                <div  style={{display:'flex',flexWrap:'wrap',margin:'2% 1% 2% 2%',paddingBottom:'70px'}}>
                    {    
                        favorites.map((favorite)=>(<ProfileImage image={favorite.Image} identifier = {favorite.ID} />))
                    }
                </div>
                )
            }
            <footer>
            <Menu/>
            </footer>
        </div>
    )
    // }
}

export default ImageExampleCircular
