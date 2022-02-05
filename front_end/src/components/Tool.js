import React from 'react';
import { Icon,Grid,Segment} from 'semantic-ui-react';
import SearchItem from './Search'
import _ from 'lodash'

function Tool() {
  return (
    <Grid  columns='equal'>
      <Grid.Column stretched>
          <SearchItem/>
      </Grid.Column>
      <Grid.Column floated='right' width={2}>
          <Icon name='filter' size='large' inverted link style={{marginLeft:'2px'}}/>
      </Grid.Column>     
    </Grid>
      
  );
}

export default Tool;