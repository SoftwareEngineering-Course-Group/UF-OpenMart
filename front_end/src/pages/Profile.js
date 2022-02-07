import React from 'react'
import { Image,Header,List,Button,Grid } from 'semantic-ui-react'
import Menu from '../components/Menu'

const ImageExampleCircular = () => (
    <div><div/>
    <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>yyb</h2>
    </div>
    <div style={{display:'flex', justifyContent: 'center' , marginLeft:'3%',marginTop:'2%'}}>
        <List size='large' >
                <List.Item>
                <List.Icon name='users' />
                <List.Content>Semantic UI</List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='marker' />
                <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                    <a href='mailto:jack@semantic-ui.com'>yuyangbo@ufl.edu</a>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                    <a href='http://www.semantic-ui.com'>https://github.com/SoftwareEngineering-Course-Group</a>
                </List.Content>
                </List.Item>
        </List>
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
        <Grid verticalAlign='middle' columns={3}>
            <Grid.Row>
                <Grid.Column >
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column >
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column >
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <br />
            </Grid.Row>
        </Grid>
        </div>
        <footer>
          <Menu/>
        </footer>
    </div>
)

export default ImageExampleCircular
