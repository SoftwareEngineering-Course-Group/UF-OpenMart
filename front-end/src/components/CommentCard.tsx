import { Comment } from 'semantic-ui-react'

const CommentCard = (comment: any) => {
    console.log(comment.avatar)
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