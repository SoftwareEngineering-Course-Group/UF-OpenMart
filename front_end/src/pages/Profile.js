import React from 'react'
import { Image,Icon,List,Button,Grid } from 'semantic-ui-react'
import Menu from '../components/Menu'
const user = 
    {
      id:1,
      name: 'yyb',
      avatar:'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      rtime: 'Feb.7th 2022',
      aboutMe:'A goat was feeding one day high on a rocky crag when a hungry wolf happened to pass below'
    }
const ImageExampleCircular = () => (
    <div><div/>
    <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>yyb</h2>
    </div>
    <div style={{textAlign:'center', margin:'2% 12% 0% 12%'}}>
        <div>
            <Icon name='time' />
            <span>registration time: {user.rtime}</span>
        </div>
        <div>
            <span>{user.aboutMe} </span>
            <Icon name='edit outline' />
        </div>     
                
    </div>
        <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'center', marginTop:'5%'}}>
            <Button primary>Message</Button>
        </div>
        <div style={{display:'flex',margin:'3%'}}>
            <h2>Posted</h2>
        </div>
        <div  style={{display:'flex',justifyContent:'center',margin:'2%'}}>
        <Grid verticalAlign='middle' columns={2} centered>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='http://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <br />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>

        <div style={{display:'flex',margin:'3%'}}>
            <h2>Favorites</h2>
        </div>
        <div  style={{display:'flex',justifyContent:'center',margin:'2%',paddingBottom:'70px'}}>
            <div style={{width:'30%'}}><Image src='https://react.semantic-ui.com/images/wireframe/image.png' /></div>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />


        </div>
        <footer>
          <Menu/>
        </footer>
    </div>
)

export default ImageExampleCircular
