import React from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';
import Filter from './Filter'
import _ from 'lodash'

function Tool() {
  return (
    <Grid  columns='equal'>
      <Grid.Column stretched>
      </Grid.Column>
      <Grid.Column floated='right' width={5} >
          <Filter/>
      </Grid.Column>     
    </Grid>
      
  );
}

export default Tool;