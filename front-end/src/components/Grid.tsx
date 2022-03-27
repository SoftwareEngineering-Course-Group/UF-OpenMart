import _ from 'lodash'
import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import { getItembyId, getRandom } from '../utils'
// import items from '../pages/Home'
const SERVER_ORIGIN = "http://localhost:12345";
const GridForItems= () => {
  const [homeItems, setItems] = useState([{
      ID : -1,
      Catagory: "",  
      Name: "",  
      Description: "",  
      Price: 0, 
      CreatedAt: null,  
      Status:   "",
      Image: ""
    }])
    useEffect(()=>{
      let data =  getRandom().then(async (response: any) =>{
        for(var j = 0; j < response.length; j++) {
          let data = await getItembyId(response[j].ID).then((res: any) =>{
            response[j].Image = SERVER_ORIGIN+res.Files[0];
            console.log(response[j].Image);
            return response
          }).catch((err) => {
              console.log(err)
              console.log("err in getItems")
          })      
        }
        console.log(response);
        setItems(response);
      }).catch((err) => {
          console.log(err)
          console.log("err in getItems")
      })       
    },[])

  return (
    <>
    <Grid columns={2}>
      <Grid.Column>            
        {
          homeItems.map((item,index:Number)=>(
          <ItemCard
            image={item.Image}
            name={item.Name}
            price={item.Price}
            id = {item.ID}
            key={item.ID}
          />))
        }
      </Grid.Column>
    </Grid>
    </>
  )
};

export default GridForItems