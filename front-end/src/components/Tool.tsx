import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import Filter from './Filter'

type selfProps = {
  setFilte: Function;
};

const Tool: React.FC<selfProps> =(pattern) =>{
  const {setFilte} = pattern
  useEffect(()=>{
    console.log("tool")
  })
  return (
    <Grid  columns='equal'>
      <Grid.Column stretched>
      </Grid.Column>
      <Grid.Column floated='right' width={5} >
          <Filter setFilte = {setFilte}/>
      </Grid.Column>     
    </Grid>
      
  );
}

export default Tool;