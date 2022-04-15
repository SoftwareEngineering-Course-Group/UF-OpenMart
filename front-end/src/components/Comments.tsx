import React,{useState,useEffect} from 'react'
import { Comment, Form, Header,Segment,Button} from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import CommentCard from '../components/CommentCard'
import { getCommentsbyId,postComment } from '../utils';
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
const Comments = (item:any) => {
  const [text, setText] = useState('')
  const [comments, setCom] = React.useState([])
  useEffect(()=>{
    console.log(item.itemId);
    getCommentsbyId(item.itemId).then((res: any) =>{
        setCom(res);
        console.log(comments);
    }).catch((err: any) => {
        console.log(err)
        console.log("err in getComments")
    })       
  }, [])
  const submit=(data: any)=>{
    //comments.push({id:5,author:'lee',content:data.message,date:'just now',avatar:'https://react.semantic-ui.com/images/avatar/small/joe.jpg',reply:[]});
    let comment={user_id:Number(localStorage.getItem('myId')),user_name:localStorage.getItem("name"),item_id:Number(item.itemId),content:data.message};
    postComment(comment).then((res: any) =>{

    }).catch((err: any) => {
        console.log(err)
        console.log("err in getComments")
    }) 
    setText('');
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  return(

    <Comment.Group style={{right:'0 px'}}>
    <Header as='h3' dividing>
      Comments
    </Header>
    
    <Form onSubmit={handleSubmit(submit)} >
    <Form.Group >
        <input {...register("message")} value={text} placeholder='Say something...' onChange={(e) => setText(e.target.value)} style={{flex:1,marginRight:'10px'}}/>
        <Button type='submit'>Submit</Button>
    </Form.Group>
    </Form>
    {    
        comments.map((comment: { id: any; avatar: any; date: any;user_name: any; content: any; reply: any; })=>(<CommentCard
          id={comment.id}
          avatar={comment.avatar}
          date={comment.date}
          author={comment.user_name}
          content={comment.content}
          reply={comment.reply}
      />))
    }

  </Comment.Group>

  
  )}

export default Comments