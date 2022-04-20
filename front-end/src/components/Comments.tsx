import React,{useState,useEffect} from 'react'
import { Comment, Form, Header,Segment,Button} from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import CommentCard from '../components/CommentCard'
import { getCommentsbyId,postComment } from '../utils';
import avator from '../avator.png'

const Comments = (item:any) => {
  const [text, setText] = useState('')
  const [comments, setCom] = React.useState([])
  useEffect(()=>{
    console.log(item.itemId);
    getCommentsbyId(item.itemId).then((res: any) =>{
        setCom(res);
        console.log(res);
    }).catch((err: any) => {
        console.log(err)
        console.log("err in getComments")
    }) 
    
  }, [comments])
  useEffect(()=>{
  },[comments])
  const submit=(data: any)=>{
    //comments.push({id:5,author:'lee',content:data.message,date:'just now',avatar:'https://react.semantic-ui.com/images/avatar/small/joe.jpg',reply:[]});
    let comment={UserID:Number(localStorage.getItem('myId')),UserName:localStorage.getItem("name"),itemId:Number(item.itemId),content:data.message};
    postComment(comment).then((res: any) =>{

    }).catch((err: any) => {
        console.log(err)
        console.log("err in getComments")
    }) 
    setText('');
    getCommentsbyId(item.itemId).then((res: any) =>{
      setCom(res);
      console.log(res);
    }).catch((err: any) => {
        console.log(err)
        console.log("err in getComments")
    }) 
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
        comments.map((comment:any)=>
        (<CommentCard
          key={comment.ID}
          //avatar={comment.avatar}
          date={comment.CreatedAt.slice(0, 10)+" "+comment.CreatedAt.slice(11, 16)}
          author={comment.UserName}
          content={comment.Content}
          avatar={avator}
      />))
    }

  </Comment.Group>

  
  )}

export default Comments