import React, { Component, useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

type selfProps = {
  setCate: Function;
};

const MenuExamplePointing: React.FC<selfProps> =(cate) =>{
  const [activeItem,setActive] = useState('home')
  const {setCate} = cate
  const handleItemClick = (e: any, { name }: any) => {
    setActive(name)
    setCate(name)
  }

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Daily necessity'
            active={activeItem === 'Daily necessity'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='sports'
            active={activeItem === 'sports'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='furniture'
            active={activeItem === 'furniture'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='kitchenware'
            active={activeItem === 'kitchenware'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='other'
            active={activeItem === 'other'}
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
