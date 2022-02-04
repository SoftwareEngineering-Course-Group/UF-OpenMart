import { Button, Form, Image,Message } from 'semantic-ui-react';
import React, { useState } from 'react';
import { login } from '../utils';
import { useForm } from "react-hook-form";

const Login = () => {
    
    const[sta , setSta] = useState('success')
    const[displayMoel , setDisplay] = useState(false)
   
    const onFinish = (data) => {
        console.log(data);
        login(data)
          .then(response => {
                setSta('success')
                setDisplay(true)
                for(var key in response){
                    if(key==="token"){
                        localStorage.setItem("jwtToken",response[key]);
                        console.log(response[key])
                    }
                }
                
          }).catch((err) => {
              setSta('failed')
              setDisplay(true)
            //   console.log(displayMoel)
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
          <label>Email</label>
          <input {...register("email")} placeholder='Email' />
          {/* {errors.input1 && <Label pointing color='red'>{errors.input1}</Label>} */}
        </Form.Field >
        <Form.Field width={5}>
          <label>Password</label>
          <input {...register("password")} placeholder='password' />
        </Form.Field >
        <Button htmltype='submit' style={{marginTop:'2%'}}>Login</Button>
        
        </Form>
        {
            displayMoel===true ?(
            <div style = {{display:'flex', justifyContent: 'center',marginTop:'2%'}}>
                <Message
                style={{width:'20%', textAlign:'center'}}
                success
                header={sta ==='success' ? 'success':"error"}
                content={sta ==='success' ? 'login successful':"failed to login"} 
                color= {sta==="success" ? 'green':'red'}
                />
            </div>
            
            ):null
        }
        </>        
      )
  }
   
  export default Login;