import _ from 'lodash'
import React, { useState,useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import { getItembyId, getRandom } from '../utils'
// import items from '../pages/Home'
const SERVER_ORIGIN = "http://localhost:12345";
const filterList = {
  0:'random',
  1:'time',
  2:'price',
}
const GridForItems= (pattern:any) => {
  const [filt,setFilt] = useState(7);
  const [category,setCategory] = useState("home")
  const [homeItems, setItems] = useState([{
      Count:-1,
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
      setFilt(pattern.pattern)
      setCategory(pattern.cate)
      console.log("grid change "+filt)
      
      //TODO: fetch data from different category
      
      
      let data =  getRandom().then(async (response: any) =>{
        for(var j = 0; j < response.length; j++) {
          let data = await getItembyId(response[j].ID).then((res: any) =>{
            response[j].Image = SERVER_ORIGIN+res.Files[0];
            response[j].Count = j;
            console.log(response[j].Image);
            return response
          }).catch((err) => {
              console.log(err)
              console.log("err in getItems")
          })      
        }
        console.log(response);
        switch(pattern.pattern){
          case(0):
          case(1):
            response.sort((item1:any,item2:any)=>
              item1.CreatedAt - item2.CreatedAt
            )
            break;
          case(2):
            response.sort((item1:any,item2:any)=>
              item1.Price - item2.Price
            )
            break;
          default:
        }
        
        setItems(response);
      }).catch((err) => {
          console.log(err)
          console.log("err in getItems")
      })       
    },[pattern])

  return (
    <>
    <Grid columns={2}>
      <Grid.Column>            
        {
          homeItems.filter((item:any,index:number)=>
            index%2===0 && (item.Image.indexOf('item/image')>0)
          )
          .map((item,index:Number)=>(
          <ItemCard
            image={item.Image}
            name={item.Name}
            price={item.Price}
            id = {item.ID}
            key={item.ID}
          />))
        }
      </Grid.Column>
      <Grid.Column>            
        {
          homeItems.filter((item:any,index:number)=>
           (index%2===1) && (item.Image.indexOf('item/image')>0)
          ).map((item,index:Number)=>(
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