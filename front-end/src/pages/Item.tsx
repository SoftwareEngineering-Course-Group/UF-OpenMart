import React from 'react';
import Menu from '../components/Menu'
import Back from '../components/Back'
import Comments from '../components/Comments'
import HeaderAvatar from '../components/HeaderAvatar'
import ItemDetails from '../components/ItemDetails';
function Item() {
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