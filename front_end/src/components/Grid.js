import _ from 'lodash'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import ItemCard from './ItemCard'


const items = [
  {
    id:1,
    name: 'goggle',
    image:'../images/2cc3723492e356375e6e26cacc12407.jpg',
    price: 3
  },
  {
    id:2,
    name: 'straight plate clip',
    image:'../images/4ff4c153d4a5841bb5cab1a5e8ecfc0.jpg',
    price: 5
  },
  {
    id:3,
    name: 'razor',
    image:'../images/36aaf8b43944fc5b767ede93c7c5696.jpg',
    price: 8
  },
  {
    id:4,
    name: 'humidifier',
    image:'../images/51c8a5a56b2538f409b2efaf9f0fffe.png',
    price: 15
  },
]

const GridForItems= ()=> (
  <Grid columns={2}>
    <Grid.Column>     
      {
        items.filter((item,index) => index%2 == 0)
        .map((item)=>(
          <ItemCard
              image={item.image}
              name={item.name}
              price={item.price}
          />
          )
        )
      }
    </Grid.Column>
    <Grid.Column>
      {
        items.filter((item,index) => index%2 == 1)
        .map((item)=>(
          <ItemCard
              image={item.image}
              name={item.name}
              price={item.price}
          />)
        )
      }
    </Grid.Column>
  </Grid>
);

export default GridForItems