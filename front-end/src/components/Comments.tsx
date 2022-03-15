import React from 'react'
import { Comment, Form, Header,Segment,Button} from 'semantic-ui-react'
import CommentCard from '../components/CommentCard'
const comments = [
  {
    id:1,
    author: 'Matt',
    avatar:'https://react.semantic-ui.com/images/avatar/small/matt.jpg',//不支持直接赋值相对路径
    content: 'How artistic!',
    date:'Today at 5:42PM',
    reply:[],
  },
  {
    id:2,
    author: 'Elliot Fu',
    avatar:'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',//不支持直接赋值相对路径
    content: 'This has been very useful for my research. Thanks as well!',
    date:'Yesterday at 12:30AM',
    reply:[  {
      id:1,
      author: 'Jenny Hess',
      avatar:'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      content: 'Elliot you are always so right :)',
      date:'Today at 5:42PM',
      reply:[{
        id:1,
        author: 'Matt',
        avatar:'https://react.semantic-ui.com/images/avatar/small/matt.jpg',//不支持直接赋值相对路径
        content: 'How artistic!',
        date:'Today at 5:42PM',
        reply:[],
      }],
    },{
      id:2,
      author: 'Jenny Hess',
      avatar:'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      content: 'Elliot you are always so right :)',
      date:'Today at 5:42PM',
      reply:[],
    }],
  },
  {
    id:3,
    author: 'Elliot Fu',
    avatar:'https://react.semantic-ui.com/images/avatar/small/joe.jpg',//不支持直接赋值相对路径
    content: 'Dude, this is awesome. Thanks so much',
    date:'5 days ago',
    reply:[],
  },
]
const Comments = () => (

    <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
    
    <Form>
    <Form.Group>
        <input placeholder='First Name' style={{flex:1,marginRight:'10px'}}/>
        <Button type='submit'>Submit</Button>
    </Form.Group>
    </Form>
    {    
        comments.map((comment)=>(<CommentCard
          id={comment.id}
          avatar={comment.avatar}
          author={comment.author}
          content={comment.content}
          reply={comment.reply}
      />))
    }

  </Comment.Group>

  
)

export default Comments