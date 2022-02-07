import _ from 'lodash'
import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import { getRandomPictures } from '../utils'

const GridForItems= (diyItems,random) => {
  const [currItems,setCurr] = useState(diyItems) 
  
  useEffect(() => {
    if(random===false){
      // const picture = getRandomPictures();
        getRandomPictures().then(picture => {
          setCurr(picture);
          console.log("get picture no err "+picture)
        }).catch((picture) => {
          setCurr(picture);
          console.log("get picture with err "+picture)     
        })
    }
    else{
      console.log("random false ")
      setCurr(diyItems);
    }
  },random)

  
  console.log("get pic" + currItems)
  return (
    <>
    <Grid columns={2}>
      <Grid.Column>            
        {
          currItems.filter((currItems,index) => index%2 === 0)
          .map((data) => (
            <ItemCard
                image={data.image}
                name={data.name}
                price={data.price}
            />
            )
          )
        }
      </Grid.Column>
      <Grid.Column>
        {
          diyItems.filter((diyItems,index) => index%2 === 1)
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
    </>
  )
};

export default GridForItems