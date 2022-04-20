import React,{useState,useEffect} from 'react'
import { Image,Icon,Button, Modal, Checkbox, Message } from 'semantic-ui-react'
import Menu from '../components/Menu'
import ProfileImage from '../components/ProfileImage'
import { getInfo, getItembyId, getPost } from '../utils';
import { useNavigate,useLocation } from 'react-router';
import avator from '../avator.png'

const SERVER_ORIGIN = "http://localhost:12345";
const user = 
    {
      aboutMe:'Welcome to come my profile!'
    }

const OtherProfile = (user:any) => {
    const [open, setOpen] = React.useState(true)
    const navigate = useNavigate();
    interface stateType {
        id: string;
    }
    const location = useLocation();
    const sta= location.state as stateType;
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


  useEffect(() => {
        let myid = sta.id
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
                    if(String(response[j].UserID)===String(myid) ){
                        userPosts.push(response[j])
                    }
                }).catch((err) => {
                    console.log(err)
                    console.log("err in getItems")
                })         
            }
            setPosted(userPosts)
            console.log(userPosts[0].Image)
        }).catch((err) => {
            setPosted(userPosts)
            console.log("err in get list "+err )
        })
        
        
    },[]
    )
    
    return(
        
        <div>
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
        
        <div style={{display:'flex', justifyContent: 'center',alignSelf:"center,flexEnd,flexEnd", marginTop: '1%'}}>
            <div style={{flexBasis: "100",paddingLeft:"10px",margin:"auto"}}>  
                <Image src={avator} size='small' circular centered/>
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
            </div>     
            
        </div>
            <div style={{display:'flex',margin:'3%'}}>
                <h2>Posted</h2>
            </div>
            {
                posted.length===0 ?(
                <div style = {{display:'flex', justifyContent: 'center', marginTop:'2%'}}>
                    <Message
                    style={{width:'50%', textAlign:'center'}}
                    success
                    header={'no items in this category'}
                    color= {'green'}
                    />
                </div>
                ):(
                <div  className='posted' style={{display:'flex',flexWrap:'wrap',margin:'2% 1% 2% 2%'}}>
                    {
                        posted.map((post)=>(<ProfileImage image={post.Image} identifier = {post.ID} key={post.ID}/>))
                    }
                </div>)
            }

            <footer>
            <Menu/>
            </footer>
        </div>
    )
    // }
}

export default OtherProfile
