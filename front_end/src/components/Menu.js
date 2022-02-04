import React, { Component } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const style ={
  footer:{
      position: 'fixed',
      bottom: '0%',
      width: '100%',
  }
}

class MenuCompact extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact icon='labeled' fluid widths={3} style={style.footer}>
        <Menu.Item
          name='gamepad'
          href="/"
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        > 
            <Icon link name='home' />
        </Menu.Item>

        <Menu.Item
          name='video camera'
          href="/add"
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='add' />
        </Menu.Item>

        <Menu.Item
          name='video play'
          href="/my"
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' />
        </Menu.Item>
      </Menu>
    )
  }
}
export default MenuCompact;