import React, { useEffect } from 'react'
import { Comment,} from 'semantic-ui-react'

const CommentCard = (comment: any) => {
    var replyComments;
    var empty;
    console.log(comment.avatar)
    const [comments, setCom] = React.useState()
    // if (comment.reply.length!=0) {
    //     replyComments = (<Comment.Group>
    //     {comment.reply.map((reply:any)=>(<CommentCard
    //             id={reply.id}
    //             avatar={reply.avatar}
    //             author={reply.author}
    //             content={reply.content}
    //             reply={reply.reply}
    //         />))}
    //     </Comment.Group>);
    // } 

    useEffect(()=>{
      setCom(comment)
      console.log(comment)
    },[])
    return(

    <Comment id={comment.id}>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.author}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.date}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
    </Comment>


  
)}

export default CommentCard