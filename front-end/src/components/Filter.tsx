import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Posted Time', value: 1 },
  { key: 2, text: 'Price', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const DropdownFilter = () => (
  <Dropdown
    text='Order By'
    fluid
    selection
    options={options}
    style={{width:'120px',float:'right'}}
  />
  

)

export default DropdownFilter