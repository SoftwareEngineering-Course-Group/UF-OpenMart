import { Icon} from 'semantic-ui-react';

function AddImage(props:any) {
  return (
    <div id={props.tabkey} style={{width:'24%',position: 'relative',paddingBottom: '25%',margin:'0% 1% 1% 0%',cursor: 'pointer'}}>
        <div style={{ 
        background: `url(${props.image}) 100% 100% no-repeat`,
        backgroundSize:'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        }}>
        {
          props.delete===true ?(<><Icon name='delete' circular link inverted onClick={()=>props.click(props.tabkey)}/></>):null
        }
        </div>
    </div>
  );
}

export default AddImage;