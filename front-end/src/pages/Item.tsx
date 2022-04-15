import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import ItemHeader from '../components/ItemHeader'
import ItemDetails from '../components/ItemDetails';
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { getItembyId, getName } from '../utils';
import { Button, Modal } from 'semantic-ui-react';

const SERVER_ORIGIN = "http://localhost:12345";
function Item() {
    interface stateType {
        id: string;
        userid:string
    }
    const para = useParams();
    const location = useLocation();
     //使用钩子获取state
    const sta= location.state as stateType;
    const [img, setImg] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [des, setDes] = React.useState("")
    const [open, setOpen] = useState(false)
    var isMine=(para.userid==localStorage.getItem("myId"))?true:false;
    console.log(para.userid)
    console.log(localStorage.getItem("myId"))
    const navigate = useNavigate();
    useEffect( ()=>{
        console.log(para)
        getItembyId(para.id).then((res: any) =>{
            setImg(SERVER_ORIGIN+res.Files[0]);
            setTitle(res.Name);
            setPrice(res.Price);
            setDes(res.Description);
            setOpen(false)
            console.log(img);
        }).catch((err) => {
            console.log(err)
            setOpen(true)
            console.log("err in getItems")
        })       
    })
    return (
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

            <Back/>
            <ItemHeader userId={sta.userid} itemId={para.id} profile={isMine}/>
            <div>
                <ItemDetails image = {img} name={title} price={price} description={des} />
                <div style={{margin:'15px',paddingBottom:'70px',}}>
                    <Comments itemId={para.id}/>
                </div>
            </div>
            
            <footer>
                <Menu/>
            </footer>
      </div>
        
    );
  }
  
  export default Item;