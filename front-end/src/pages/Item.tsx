import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import ItemHeader from '../components/ItemHeader'
import ItemDetails from '../components/ItemDetails';
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { getItembyId, getName } from '../utils';
import { Button, Modal,Icon } from 'semantic-ui-react';

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
    const [info, setInfo] = React.useState({
        name:null,
        price:null,
        des:null,
        date:" "

    })
    const [open, setOpen] = useState(false)
    const [countPic, setPic] = React.useState(0)
    const [imgs, setImgs] = React.useState([""])
    var isMine=(sta.userid==localStorage.getItem("myId"))?true:false;
    const navigate = useNavigate();
    useEffect( ()=>{
        console.log(para)
        getItembyId(para.id).then((res: any) =>{
            setImg(SERVER_ORIGIN+res.Files[countPic]);
            setImgs(res.Files);
            //console.log(imgs[0])
            let info={name:res.Name,price:res.Price,des:res.Description,date:res.CreatedAt.slice(0, 10)+" "+res.CreatedAt.slice(11, 16)}
            setInfo(info);
            setOpen(false)
            console.log(img);
        }).catch((err) => {
            console.log(err)
            setOpen(true)
            console.log("err in getItems")
        })       
    },[])
    const clickNext =()=>{
        let len=imgs.length;
        console.log("next");
        setPic(countPic+1>=len?len-1:countPic+1)
        setImg(SERVER_ORIGIN+imgs[countPic]);
    
      }
    const clickPre =()=>{
        setPic(countPic-1<0?0:countPic-1)
        console.log("pre");
        setImg(SERVER_ORIGIN+imgs[countPic]);

    }
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
                <div style={{display:'flex',flexWrap: 'nowrap',alignItems: 'center'}} >
                    <Icon circular name='angle left' style={{flexShrink:'0'}} onClick={clickPre}/>
                    <ItemDetails image = {img} name={info.name} price={info.price} description={info.des} createdAt={info.date} id={para.id}/>
                    <Icon circular name='angle right' style={{flexShrink:'0'}} onClick={clickNext }/>
                </div>
                <div style={{margin:'33px',paddingBottom:'70px',}}>
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