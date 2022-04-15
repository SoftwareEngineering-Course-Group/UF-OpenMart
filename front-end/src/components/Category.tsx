import { Content } from 'antd/lib/layout/layout';
import React, { Component, useEffect, useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

type selfProps = {
  setCate: Function;
  setTarget:Function;
};

const MenuExamplePointing: React.FC<selfProps> =(cate) =>{
  const [activeItem,setActive] = useState('all')
  const setCate = cate.setCate
  const setTarget = cate.setTarget
  const [content,setContent] = useState("123");
  const handleItemClick = (e: any, { name }: any) => {
    setActive(name)
    setCate(name)
  }
  const handleSearch = (cont:string)=>{
    console.log("search: "+cont)
    setTarget(cont)
  }
  // useEffect(()=>{
  //   console.log(content)
  // },[content])
  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name='all'
          active={activeItem === 'all'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='daily necessity'
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
          <Input
            onChange={(content:any)=>{
              setContent(content.target.value)
            }}
            icon={{ name: 'search', circular: true, link: true ,onClick:()=> handleSearch(content)}}
            placeholder='Search...'
            
          />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default MenuExamplePointing;
