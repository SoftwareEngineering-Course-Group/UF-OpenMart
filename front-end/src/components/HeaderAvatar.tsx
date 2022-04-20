import { Header, Image} from 'semantic-ui-react'
function HeaderAvatar() {

  return (
    <div style={{margin:'15px',display:'flex'}}>
         <Header as='h2' >
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> {localStorage.getItem("email")}
        </Header>
    </div>
      
  );
}

export default HeaderAvatar;