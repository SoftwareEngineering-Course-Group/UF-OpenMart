import React from 'react';
import { Icon,Grid} from 'semantic-ui-react';
import SearchItem from './Search'
import _ from 'lodash'

function Tool() {
  return (
    <Grid centered columns={1}>
        <Grid.Column width={4}>
          <SearchItem style={{width:'400%'}}></SearchItem>
        </Grid.Column>
        <Grid.Column width={4} style={{marginLeft:'2px'}}>
          <Icon name='filter' size='large' color='orange'/>
        </Grid.Column>
    </Grid>
      
  );
}

export default Tool;