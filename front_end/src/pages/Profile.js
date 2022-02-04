import React from 'react'
import { Image,Header,List,Button,Grid } from 'semantic-ui-react'

const ImageExampleCircular = () => (
    <div><div/>
    <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>Friends</h2>
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
                    <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                </List.Content>
                </List.Item>
                <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                    <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                </List.Content>
                </List.Item>
        </List>
    </div>
        <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'center', marginTop:'5%'}}>
            <Button primary>Message</Button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'3%'}}>
            <h2>已发布</h2>
        </div>
        <div  style={{display:'flex',justifyContent:'center',marginTop:'3%'}}>
        <Grid verticalAlign='middle' columns={2} centered>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
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
            </Grid.Row>
        </Grid>
        </div>
    </div>
)

export default ImageExampleCircular
