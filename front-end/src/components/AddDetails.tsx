import React, {useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { postItem,postImages } from '../utils';
import {
    Button,
    Form,
    Input,
    Icon,
    Image,
    TextArea,
  } from 'semantic-ui-react'
import ProfileImage from "./ProfileImage";

let formData = new FormData();
var curImages: any[]=[];
var postFiles: any[]=[];

const AddDetails= ()=> {
    const [imagePreviewUrls, setImageUrl] = useState<any[]>([])
    const navi = useNavigate();
    const previewFile=(e:any)=> {
      e.preventDefault();
      
      var files = e.target.files;
      const readAndPreview=(file:any)=>{
        
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
          var reader = new FileReader();
          reader.onloadend = () => {
            if(curImages.indexOf(reader.result)===-1){
              postFiles.push(file);
              curImages.push(reader.result);
              setImageUrl(curImages.slice(0,));
              console.log(imagePreviewUrls);
              console.log(curImages);//log对象时 异步执行
            }
          }
          reader.readAsDataURL(file)
        }
        
      }
    
      if (files) {
        [].forEach.call(files, readAndPreview);
        
      }
    }

    const handleClick =(key: number)=>{//delete pic
        console.log(key);
        curImages.splice(key,1);
        postFiles.splice(key,1);
        setImageUrl(curImages.slice(0,));
        console.log(imagePreviewUrls);

    }
    let postData = {
        id : -1,
        catagory: "",  
        name: "",  
        description: "",  
        price: 0, 
    }
    const images=(data: any)=>{//post images
      console.log(postFiles);
      console.log(data);
      for (var i=0;i<postFiles.length;i++){
          formData.append('upload[]',postFiles[i]);
      }
      console.log(formData.getAll('upload[]'));
      postImages(formData)
      .then((response) => {
        console.log(response);
        if(response['item_id']){
          data['catagory'] = 'temp'
          data['id'] = response['item_id']
          postItem(data,response['item_id'],"temp")
          .then((response) => {
            console.log(response);
            console.log("success")
          }).catch((err) => {
              console.log("failed to Add")
              console.log(err)
              
          })
        }
        
      }).catch((err) => {
              //console.log(formData.getAll('upload[]'));
              console.log(err)
          
      })
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
      
    return (
      <div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
        <Form onSubmit={handleSubmit(images)}>
          <Form.Field>
             <label>Title</label>
             <input {...register("name")} placeholder='what is your goods?' style={{width:'30%'}}/>
          </Form.Field> 
        <Form.Field>
            <label>Detail Description</label>
            <textarea {...register("description")} placeholder='...' style={{ minHeight: 180 }} />
        </Form.Field>
        <Form.Field inline>
            <label style={{marginBottom:'30px'}}>Price</label>
            <input type="number" {...register("price", {
                  setValueAs: v => parseFloat(v),
                }) } placeholder='price' style={{width:'30%'}}/>
            <label>&nbsp; $</label>
            <div style={{marginBottom:'20px'}}>
              <label htmlFor="picFor"><Icon name='upload' size='big' link />images</label>
              <input id="picFor" style={{display:'none'}} type="file"  onChange={previewFile} multiple/>
            </div>
  
        </Form.Field>
        <div  style={{display:'flex',flexWrap:'wrap',paddingBottom:'10px'}}>
            {imagePreviewUrls.map((url,index)=>(< ProfileImage key={index} tabkey={index} image={url} delete={true} click={handleClick}/>))}
        </div>
        
        <Button htmltype='submit'>Submit</Button>
        
      </Form>
        </div>
      </div>
    );
  }
  
  export default AddDetails