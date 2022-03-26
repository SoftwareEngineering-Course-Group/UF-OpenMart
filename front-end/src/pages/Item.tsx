import React, { useEffect } from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import HeaderAvatar from '../components/HeaderAvatar'
import ItemDetails from '../components/ItemDetails';
import { useLocation,useParams } from 'react-router-dom';
import { getItembyId } from '../utils';
const SERVER_ORIGIN = "http://localhost:12345";
function Item(props:any) {
    interface stateType {
        id: string;
    }
    const para = useParams();
    const location = useLocation();
     //使用钩子获取state
    const sta= location.state as stateType;
    const [img, setImg] = React.useState("")
    useEffect(()=>{
        console.log(para.id)
        let data =  getItembyId(para.id).then((res: any) =>{
            setImg(SERVER_ORIGIN+res.Files[0]);
            console.log(img);
        }).catch((err) => {
            console.log(err)
            console.log("err in getItems")
        })       
    })
    return (
        <div>
            <Back/>
            <HeaderAvatar/>
            <ItemDetails image = {img}/>
            <div style={{margin:'15px',paddingBottom:'70px'}}>
                <Comments/>
            </div>
            <footer>
                <Menu/>
            </footer>
      </div>
        
    );
  }
  
  export default Item;