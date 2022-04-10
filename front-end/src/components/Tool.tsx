import React, { useEffect, useState } from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';
import Filter from './Filter'
import _ from 'lodash'

type selfProps = {
  setFilte: Function;
};

const Tool: React.FC<selfProps> =(pattern) =>{
  const {setFilte} = pattern
  useEffect(()=>{
    // setFilte(2);
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