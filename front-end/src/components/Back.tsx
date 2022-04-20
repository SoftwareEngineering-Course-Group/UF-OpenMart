import { Icon } from 'semantic-ui-react'

const Back =()=> {
  const clickBackHandler =()=>{
    window.history.back();
  }
  return (
      <div style={{margin:'15px'}}>
          <Icon name='long arrow alternate left' size='big' link onClick={clickBackHandler }/>
      </div>
        
    );
  
}

export default Back;