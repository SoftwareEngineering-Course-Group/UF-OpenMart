import React, { Component,useState } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const style ={
  footer:{
      position: 'fixed',
      bottom: '0%',
      width: '100%',
  }
}
const MenuCompact= ()=> {
  const [activeItem, setActiveItem] = useState<any>([])
  
  const handleItemClick = (e:any,data:any) => {
    setActiveItem(data.name);
  }

    return (
      <Menu compact icon='labeled' fluid widths={3} style={style.footer}>
        <Menu.Item
          name='gamepad'
          href="/"
          active={activeItem === 'gamepad'}
          onClick={handleItemClick}
        > 
            <Icon link name='home' />
        </Menu.Item>

        <Menu.Item
          name='video camera'
          href="/add"
          active={activeItem === 'video camera'}
          onClick={handleItemClick}
        >
          <Icon name='add' />
        </Menu.Item>

        <Menu.Item
          name='video play'
          href="/profile"
          active={activeItem === 'video play'}
          onClick={handleItemClick}
        >
          <Icon name='user' />
        </Menu.Item>
      </Menu>
    );
}
export default MenuCompact;