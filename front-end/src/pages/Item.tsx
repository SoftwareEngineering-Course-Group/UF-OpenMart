import React, { useEffect } from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import ItemHeader from '../components/ItemHeader'
import ItemDetails from '../components/ItemDetails';
import { useLocation,useParams } from 'react-router-dom';
import { getItembyId, getName } from '../utils';

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
    
    var isMine=false;
    useEffect( ()=>{
        console.log(para)
        getItembyId(para.id).then((res: any) =>{
            setImg(SERVER_ORIGIN+res.Files[0]);
            setTitle(res.Name);
            setPrice(res.Price);
            setDes(res.Description);
            console.log(img);
        }).catch((err) => {
            console.log(err)
            console.log("err in getItems")
        })       
    })
    return (
        <div>
            <Back/>
            <ItemHeader userId={sta.userid} itemId={para.id} profile={isMine}/>
            <div>
                <ItemDetails image = {img} name={title} price={price} description={des} />
                <div style={{margin:'15px',paddingBottom:'70px',}}>
                    <Comments/>
                </div>
            </div>
            
            <footer>
                <Menu/>
            </footer>
      </div>
        
    );
  }
  
  export default Item;