import _ from 'lodash'
import React, { useState,useEffect } from 'react';
import { Button, Grid, Message, Modal } from 'semantic-ui-react'
import ItemCard from './ItemCard'
import { getCategory, getItembyId, getRandom } from '../utils'
import { useNavigate } from 'react-router';
// import items from '../pages/Home'
const SERVER_ORIGIN = "http://localhost:12345";
const filterList = {
  0:'random',
  1:'time',
  2:'price',
}
const GridForItems= (pattern:any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false)
  const [filt,setFilt] = useState(0);
  const [category,setCategory] = useState("home")
  const [hasItems,setHas] = useState(false) 
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
  const [newOrder, setNew] = useState([{
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
  const getCate = (cate:string) =>{
    if(cate === 'home'){
      getRandom().then(async (response: any) =>{
        if(response === null){
          console.log("empty items")
          setHas(true)
          setNew([])
          setItems([])
          console.log(response);
        }else{
          setHas(false)
          for(var j = 0; j < response.length; j++) {
            await getItembyId(response[j].ID).then((res: any) =>{
              response[j].Image = SERVER_ORIGIN+res.Files[0];
              response[j].Count = j;
              // console.log(response[j].Image);
              return response
            }).catch((err) => {
                console.log(err)
                console.log("err in getItems")
            })      
          }
          console.log(response)
          setNew(response.slice(0))
          setItems(response.slice(0));
        }
      }).catch((err) => {
          console.log(err)
          console.log("err in getItems")
      })
    }
    else{
      getCategory(cate).then(async (response: any) =>{
        if(response === null){
          console.log("empty items")
          setHas(true)
          setNew([])
          setItems([])
          console.log(response);
        }else{
          // console.log(response);
          setHas(false)
          for(var j = 0; j < response.length; j++) {
            await getItembyId(response[j].ID).then((res: any) =>{
              response[j].Image = SERVER_ORIGIN+res.Files[0];
              response[j].Count = j;
              // console.log(response[j].Image);
              return response
            }).catch((err) => {
                console.log(err)
                console.log("err in getItems")
            })      
          }
          
          console.log(response);
          setNew(response.slice(0))
          setItems(response.slice(0));
        }
      }).catch((err) => {
          console.log(err)
          setOpen(true)
          console.log("err in getItems")
      })  
    }
    
  }
    useEffect(()=>{
      console.log("setCate: "+pattern.cate)
      setCategory(pattern.cate)
      console.log(pattern.cate);
      getCate(pattern.cate);
    },[pattern.cate])

    useEffect(()=>{
      console.log("filter changed: "+pattern.pattern)
      switch(pattern.pattern){
        case(0):
          break;
        case(1):
          homeItems.sort((item1:any,item2:any)=>{
              if(item1.CreatedAt > item2.CreatedAt){
                return item1
              }
              else{
                return item2
              }
            }
          )
          const newAr = homeItems.slice(0)
          setItems(newAr)
          console.log(homeItems);
          break;
        case(2):
          homeItems.sort((item1:any,item2:any)=>
            item1.Price - item2.Price
          )
          const newArr = homeItems.slice(0)
          setItems(newArr)
          break;
        case(3):
          console.log(newOrder)
          setItems(newOrder.slice(0))
          break;
        default:
      }
    },[pattern.pattern])

  return (
    <>
          <Modal
              centered={false}
              open={open}
              // onClose={() => setOpen(false)}
              // onOpen={() => setOpen(true)}
              // trigger={<Button>Show Modal</Button>}
          >
          <Modal.Header>Failed to access</Modal.Header>
          <Modal.Content>
              <Modal.Description>
              Please login first...
              </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
              <Button onClick={() => navigate("/login")}>Back to Login</Button>
          </Modal.Actions>
          </Modal>
    
            {
              hasItems===true ?(
              <div style = {{display:'flex', justifyContent: 'center', marginTop:'2%'}}>
                  <Message
                  style={{width:'50%', textAlign:'center'}}
                  success
                  header={'no items in this category'}
                  // content={'no items in this category'} 
                  color= {'green'}
                  />
              </div>
            
            ):(<Grid columns={4}>
              <Grid.Column>            
                {
                  homeItems.filter((item:any,index:number)=>
                    index%4===0 && (item.Image.indexOf('item/image')>0)
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
                   (index%4===1) && (item.Image.indexOf('item/image')>0)
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
              <Grid.Column>            
                {
                  homeItems.filter((item:any,index:number)=>
                   (index%4===2) && (item.Image.indexOf('item/image')>0)
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
              <Grid.Column>            
                {
                  homeItems.filter((item:any,index:number)=>
                   (index%4===3) && (item.Image.indexOf('item/image')>0)
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
            </Grid>)
            }
    
    </>
  )
};

export default GridForItems