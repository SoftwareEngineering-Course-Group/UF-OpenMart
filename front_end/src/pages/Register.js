
import { Button, Form, Image,Message } from 'semantic-ui-react';
import React, { useState } from 'react';
import { registe } from '../utils';
import { useForm } from "react-hook-form";

const Register = () => {
    
    const[sta , setSta] = useState('success')
    const[displayMoel , setDisplay] = useState(false)
   
    const onFinish = (data) => {
        console.log(data);
        registe(data)
          .then(() => {
            setSta('success')
            setDisplay(true)
            // return (
                // <MessageExamplePositive />
            // )
          }).catch((err) => {
              console.log("failed to register")
              setSta('failed')
              setDisplay(true)
              console.log(data)
          })
      }
    const { register, handleSubmit, formState: { errors } } = useForm();
      
      return (
        <>
        <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>Welcome</h2>
        </div>
        <Form style={{display:'flex', flexDirection:'column',justifyContent: 'center'
        ,alignItems:'center',flexWarp:'wrap',marginTop:'2%'}} onSubmit={handleSubmit(onFinish)}>
        
        <Form.Field width={5}>
          <label>User Name</label>
          <input {...register("name")} placeholder='name' />
        </Form.Field>
        <Form.Field width={5}>
          <label>Phone</label>
          <input {...register("phone")} placeholder='phone number' />
        </Form.Field >
        <Form.Field width={5}>
          <label>Email</label>
          <input {...register("email")} placeholder='phone number' />
          {/* {errors.input1 && <Label pointing color='red'>{errors.input1}</Label>} */}
        </Form.Field >
        <Form.Field width={5}>
          <label>Password</label>
          <input {...register("password")} placeholder='password' />
        </Form.Field >
        <Button htmltype='submit' style={{marginTop:'2%'}}>Register</Button>
        
        </Form>
        {
            displayMoel===true ?(
            <div style = {{display:'flex', justifyContent: 'center',marginTop:'2%'}}>
                <Message
                style={{width:'20%', textAlign:'center'}}
                success
                header={sta ==='success' ? 'success':"error"}
                content={sta ==='success' ? 'register successful':"failed to register"} 
                color= {sta==="success" ? 'green':'red'}
                />
            </div>
            
            ):null
        }
        </>        
      )
  }
   
  export default Register;