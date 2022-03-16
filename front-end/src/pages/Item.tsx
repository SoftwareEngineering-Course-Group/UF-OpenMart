import React from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import HeaderAvatar from '../components/HeaderAvatar'
import ItemDetails from '../components/ItemDetails';
import { useLocation } from 'react-router-dom';
function Item() {
    interface stateType {
        id: string;
    }
    const location = useLocation();
     //使用钩子获取state
    const sta= location.state as stateType;
    return (
        <div>
            <Back/>
            <HeaderAvatar/>
            <ItemDetails/>
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