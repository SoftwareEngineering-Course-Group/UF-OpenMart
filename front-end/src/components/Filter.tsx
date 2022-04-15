import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownMenu, Menu } from 'semantic-ui-react'

const tagoptions = [
  { text: 'Posted Time', value: 1 },
  { text: 'Price', value: 2 },
  { text: 'Choice 3', value: 3 },
]


type selfProps = {
  setFilte: Function;
};
const DropdownFilter : React.FC<selfProps> = (pattern:any) => {
  const {setFilte} = pattern
  useEffect(()=>{
  },[])
  return(
    <Dropdown
      text='Order By'
      fluid
      selection
      // ={tagoptions}
      options = {tagoptions.map((option) => (
        <Dropdown.Item key={option.value} {...option} onClick = {()=>
          setFilte(option.value)}/>
      ))}
      style={{width:'120px',float:'right'}}
    >
    </Dropdown>
  )
}

export default DropdownFilter