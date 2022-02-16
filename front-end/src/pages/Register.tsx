import { Image } from 'semantic-ui-react';
import img from '../albert-alberta-uf-mascots-cropped-1000x610-1.jpeg';
import Menu from '../components/Menu'
import { Button, Form, Message } from 'semantic-ui-react';
import React, { useState} from 'react';
import { useNavigate  } from "react-router-dom";
import { registe } from '../utils';
//import history from '../history';
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const[sta , setSta] = useState('success')
  const[displayMoel , setDisplay] = useState(false)
  const navi = useNavigate();
  const onFinish = (data: any) => {
    console.log(data);
    registe(data)
      .then(() => {
        setSta('success')
        setDisplay(true)
        // history.push('/login');
        navi('/login')
      }).catch((err: any) => {
          console.log("failed to register")
          setSta('failed')
          setDisplay(true)
          // history.push('/login');
          // navi('/login')
          // console.log(data)
          
      })
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
      
      return (
        <>
        <div style={{display:'flex', justifyContent: 'center',flexDirection:'column', marginTop: '5%'}}>
        
        <Image src={img} size='small' circular centered/>
        <h2 style={{display:'flex', justifyContent: 'center',marginTop:'3%'}}>Welcome</h2>
        </div>
        <Form style={{display:'flex', flexDirection:'column',justifyContent: 'center'
        ,alignItems:'center',flexWarp:'wrap',marginTop:'2%'}} onSubmit={handleSubmit(onFinish)}>
        
        <Form.Field width={8}>
          <label>User Name</label>
          <input {...register("name")} placeholder='name' />
        </Form.Field>
        <Form.Field width={8}>
          <label>Phone</label>
          <input {...register("phone")} placeholder='phone number' />
        </Form.Field >
        <Form.Field width={8}>
          <label>Email</label>
          <input {...register("email")} placeholder='email' />
          {/* {errors.input1 && <Label pointing color='red'>{errors.input1}</Label>} */}
        </Form.Field >
        <Form.Field width={8}>
          <label>Password</label>
          <input {...register("password")} type='password' placeholder='password' />
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
        <footer>
          <Menu/>
        </footer>
        </>        
      )
  }
   
  export default RegisterPage;