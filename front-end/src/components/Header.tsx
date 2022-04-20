import { Header, Icon } from 'semantic-ui-react'

const AppHeader = () => (
  <Header as='h2' style={{color:'white'}}>
    <Icon name='settings' />
    <Header.Content>
        UF OpenMart
      <Header.Subheader style={{color:'white'}}>UF second-hand trading platform</Header.Subheader>
    </Header.Content>
  </Header>
)

export default AppHeader