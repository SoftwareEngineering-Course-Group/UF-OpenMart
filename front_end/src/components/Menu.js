import React, { Component } from 'react'
import { Icon, Menu, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const style ={
  footer:{
      position: 'fixed',
      bottom: '0%',
      width: '100%',
  }
}
export default class MenuExampleCompact extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact icon='labeled' fluid widths={3} style={style.footer}>
        <Link to="/">
        <Menu.Item
          name='gamepad'
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        > 
          
          <Icon name='home' />
        </Menu.Item>
        </Link>

        <Menu.Item
          name='video camera'
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='add' />
        </Menu.Item>

        <Menu.Item
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' />
        </Menu.Item>
      </Menu>
    )
  }
}