import React, {useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";
import { postItem } from '../utils';
import {
    Button,
    Form,
    Input,
    Icon,
    Image,
    TextArea,
  } from 'semantic-ui-react'
import ProfileImage from "./ProfileImage";
  
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
            if(imagePreviewUrls.indexOf(reader.result)==-1){
              setImageUrl(imagePreviewUrls.concat([reader.result]));
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
            navi('/login')
            console.log(data)
            
        })
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
      
      
    return (
      <div>
        <div style={{margin:'15px',paddingBottom:'70px'}}>
        <Form onSubmit={handleSubmit(onFinish)}>
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
            {imagePreviewUrls.map((url,index)=>(< ProfileImage key={index} image={url}/>))}
        </div>
        <Form.Field>
          <Button htmltype='submit'>Submit</Button>
        </Form.Field>
      </Form>
        </div>
      </div>
    );
  }
  
  export default AddDetails