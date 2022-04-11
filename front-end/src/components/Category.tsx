import React, { Component, useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

const MenuExamplePointing = () => {
  const [activeItem,setActive] = useState('home')

  const handleItemClick = (e: any, { name }: any) => setActive(name)

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
}

export default MenuExamplePointing;
