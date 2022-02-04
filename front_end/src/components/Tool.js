import React from 'react';
import { Icon,Grid, Segment} from 'semantic-ui-react';
import SearchItem from './Search'
import _ from 'lodash'

function Tool() {
  return (
    <Grid>
        <Grid.Column>
          <SearchItem/>
        </Grid.Column>
        <Grid.Column>
          <Icon name='filter' size='large' color='orange'/>
        </Grid.Column>

        
    </Grid>
      
  );
}

export default Tool;