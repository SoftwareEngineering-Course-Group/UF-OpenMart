import _ from 'lodash'
import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import { getRandomPictures } from '../utils'
// import items from '../pages/Home'

const GridForItems= (diyItems:any,random:boolean[]) => {
  const [currItems,setCurr] = useState(diyItems) 
  
  useEffect(() => {
    if(random[0]===false){
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
          currItems.filter((currItems: any,index: number) => index%2 === 0)
          .map((data: { image: string; name: string; price: number; id: number; }) => (
            <ItemCard
                image={data.image}
                name={data.name}
                price={data.price}
                key={data.id}
            />
            )
          )
        }
      </Grid.Column>
      <Grid.Column>
        {
          diyItems.filter((diyItems: any,index: number) => index%2 === 1)
          .map((item: { image: string; name: string; price: number; id: number; })=>(
            <ItemCard
                image={item.image}
                name={item.name}
                price={item.price}
                key={item.id}
            />)
          )
        }
      </Grid.Column>
    </Grid>
    </>
  )
};

export default GridForItems