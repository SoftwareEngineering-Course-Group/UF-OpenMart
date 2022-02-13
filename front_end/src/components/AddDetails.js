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
var curImages=[];
var postFiles=[];
const AddDetails= ()=> {
    const [imagePreviewUrls, setImageUrl] = useState([]);
    const navi = useNavigate();
    const previewFile=(e)=> {
      e.preventDefault();
      
      var files = e.target.files;
      const readAndPreview=(file)=>{
        
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

    const onFinish = (data) => {
      console.log(data);
      postItem(data)
        .then(() => {
          navi('/login')
        }).catch((err) => {
            console.log("failed to Add")
            console.log(data)
            
        })
    }
    const handleClick =(key)=>{//delete pic
        console.log(key);
        curImages.splice(key,1);
        postFiles.splice(key,1);
        setImageUrl(curImages.slice(0,));
        console.log(imagePreviewUrls);

    }
    const images=()=>{
      console.log(postFiles);
      for (var i=0;i<postFiles.length;i++){
          formData.append('upload[]',postFiles[i]);
      }
      console.log(formData.getAll('upload[]'));
      postImages(formData)
      .then(() => {
        console.log("success to Add")
      }).catch((err) => {
          //console.log(formData.getAll('upload[]'));
          console.log(err)
          
      })
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    //onSubmit={handleSubmit(onFinish)}
      
    return (
      <div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
        <Form >
          <Form.Field>
             <label required>Title</label>
             <Input {...register("title")} placeholder='what is your goods?' style={{width:'30%'}}/>
          </Form.Field> 
        <Form.Field>
            <label>Detail Description</label>
            <TextArea {...register("describle")} placeholder='...' style={{ minHeight: 180 }} />
        </Form.Field>
        <Form.Field inline>
            <label style={{marginBottom:'30px'}} required>Price</label>
            <Input {...register("price")} placeholder='price' style={{width:'30%'}}/>
            <label>&nbsp; $</label>
            <div style={{marginBottom:'20px'}}>
              <label htmlFor="picFor"><Icon name='upload' size='big' link />images</label>
              <input id="picFor" style={{display:'none'}} type="file"  onChange={previewFile} multiple/>
            </div>
  
        </Form.Field>
        <div  style={{display:'flex',flexWrap:'wrap',paddingBottom:'10px'}}>
            {imagePreviewUrls.map((url,index)=>(< ProfileImage key={index} tabkey={index} image={url} delete={true} click={handleClick}/>))}
        </div>
        <Form.Field>
          <Button htmltype='submit' onClick={()=>images()}>Submit</Button>
        </Form.Field>
      </Form>
        </div>
      </div>
    );
  }
  
  export default AddDetails